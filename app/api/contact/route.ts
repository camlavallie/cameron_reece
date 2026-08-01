import nodemailer from "nodemailer";

export const runtime = "nodejs";

const PROJECT_TYPES: Record<string, string> = {
  website: "Website design / development",
  branding: "Branding / creative",
  hubspot: "HubSpot / CRM systems",
  "email-marketing": "Email marketing / automation",
  other: "Other",
};

const BUDGET_RANGES: Record<string, string> = {
  "under-1k": "Under $1k",
  "1k-3k": "$1k–$3k",
  "3k-5k": "$3k–$5k",
  "5k-plus": "$5k+",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const website = clean(data.website, 200);

  // Silently accept bot submissions so the honeypot does not reveal itself.
  if (website) {
    return Response.json({ ok: true });
  }

  const name = clean(data.name, 100);
  const email = clean(data.email, 254).toLowerCase();
  const projectType = clean(data.projectType, 50);
  const budget = clean(data.budget, 50);
  const message = clean(data.message, 5000);

  if (
    name.length < 2 ||
    !EMAIL_PATTERN.test(email) ||
    !PROJECT_TYPES[projectType] ||
    (budget && !BUDGET_RANGES[budget]) ||
    message.length < 20
  ) {
    return Response.json(
      { error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword || !receiverEmail) {
    console.error("Contact form email environment variables are not configured.");
    return Response.json(
      { error: "Email is temporarily unavailable. Please try again later." },
      { status: 500 },
    );
  }

  const projectLabel = PROJECT_TYPES[projectType];
  const budgetLabel = budget ? BUDGET_RANGES[budget] : "Not provided";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `Cameronreece.com <${gmailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        "New Cameronreece.com project inquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectLabel}`,
        `Budget range: ${budgetLabel}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
      html: `
        <h2>New Cameronreece.com project inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Project type:</strong> ${escapeHtml(projectLabel)}</p>
        <p><strong>Budget range:</strong> ${escapeHtml(budgetLabel)}</p>
        <p><strong>Project details:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Unable to send contact form email:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}


import Landing from "@/components/Landing";
import Work from "@/components/Work";
import FavoriteThings from "@/components/FavoriteThingsValues";
import PipelineStep from "@/components/PipelineStep"
import CrmIntegrations from "@/components/CrmIntegrations";
export default function Home() {
  return (
    <>
      <Landing />
      <Work />
      <PipelineStep/>
      <CrmIntegrations />
      <FavoriteThings/>
    </>
  );
}

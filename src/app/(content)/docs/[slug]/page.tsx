import { InstallationView } from "../components/installation-view";
import { IntroView } from "../components/introduction-view";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const getDocView = () => {
    switch (slug) {
      case "intro":
        return <IntroView />;
      case "installation":
        return <InstallationView />;
      default:
        return <IntroView />;
    }
  };
  return <>{getDocView()}</>;
}

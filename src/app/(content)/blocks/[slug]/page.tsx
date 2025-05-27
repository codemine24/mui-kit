import { ComingSoon } from "@/components/coming-soon";
import { blocksArr } from "@/router/router";
import { JSX } from "react";
import { AboutBlockView } from "../view/about-block-view";

export async function generateStaticParams() {
  return blocksArr.map((element) => ({
    slug: element.path?.split("/").pop(),
  }));
}

// ***********************************************
//            Add new Components here
// ***********************************************
const componentMap: Record<string, JSX.Element> = {
  about: <AboutBlockView />,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = componentMap[slug];
  if (!component) return <ComingSoon returnUrl="/blocks" />;

  return component;
}

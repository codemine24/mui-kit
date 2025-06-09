import { ComingSoon } from "@/components/coming-soon";
import { PATHS } from "@/router/paths";
import { blocksArr } from "@/router/router";
import { JSX } from "react";
import { AboutBlockView } from "../view/about-block-view";
import { ContactBlockView } from "../view/contact-block-view";
import { CopyrightView } from "../view/copyright-view";
import { CSView } from "../view/cs-view";
import { CTAView } from "../view/cta-block-view";
import { FaqView } from "../view/faq-view";
import { FeatureView } from "../view/feature-view";
import { FooterView } from "../view/footer-view";
import { PricingTableView } from "../view/pricint-table-view";
import { ServicesView } from "../view/services-view";

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
  "call-to-action": <CTAView />,
  "coming-soon": <CSView />,
  contact: <ContactBlockView />,
  copyright: <CopyrightView />,
  faq: <FaqView />,
  "feature-benefit": <FeatureView />,
  footer: <FooterView />,
  "pricing-table": <PricingTableView />,
  services: <ServicesView />,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = componentMap[slug];
  if (!component) return <ComingSoon returnUrl={PATHS.BLOCKS.OVERVIEW} />;

  return component;
}

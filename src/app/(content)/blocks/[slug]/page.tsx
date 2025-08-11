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
import { FeatureProductView } from "../view/feature-product-view";
import { FeatureView } from "../view/feature-view";
import { FocusBoxView } from "../view/focus-box-view";
import { FooterView } from "../view/footer-view";
import { HeroView } from "../view/hero-view";
import { JumbotronView } from "../view/jumbotron-view";
import { NewsletterSubscriptionView } from "../view/newsletter-subscription-view";
import { PricingMenuView } from "../view/pricing-menu-view";
import { PricingTableView } from "../view/pricing-table-view";
import { ServicesView } from "../view/services-view";
import { SubHeroView } from "../view/sub-hero-view";
import { TeamView } from "../view/team-view";
import { TestimonialGridView } from "../view/testimonial-grid-view";
import { TestimonialSliderView } from "../view/testimonial-slider-view";

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
  "feature-device": <FeatureProductView />,
  "newsletter-subscription": <NewsletterSubscriptionView />,
  footer: <FooterView />,
  "pricing-table": <PricingTableView />,
  services: <ServicesView />,
  "pricing-menu": <PricingMenuView />,
  "single-profile": <CSView />,
  "testimonial-grid": <TestimonialGridView />,
  "testimonial-slider": <TestimonialSliderView />,
  team: <TeamView />,
  hero: <HeroView />,
  "sub-hero": <SubHeroView />,
  "focus-box": <FocusBoxView />,
  jumbotron: <JumbotronView />,
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

"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import { Box, Divider } from "@mui/material";
import React from "react";
import { 
  newsletterSubscriptionSimpleString,
  newsletterSubscriptionModernString,
  newsletterSubscriptionEcosystemString,
  newsletterSubscriptionLiquidString,
  newsletterSubscriptionHorizontalString
} from "../code-string/newsletter-subscription";
import { NewsletterSubscriptionHorizontal } from "../components/newsletter-subscription/newsletter-subscription-horizontal-preview";
import { NewsletterSubscriptionModernPreview } from "../components/newsletter-subscription/newsletter-subscription-modern-preview";
import { NewsletterSubscriptionEcosystemPreview } from "../components/newsletter-subscription/newsletter-subscription-ecosystem-preview";
import { NewsletterSubscriptionLiquidPreview } from "../components/newsletter-subscription/newsletter-subscription-liquid-preview";
import NewsletterSubscriptionSimplePreview from "../components/newsletter-subscription/newsletter-subscription-simple-preview";

const sections = [
  {
    id: "newsletter-subscription-simple",
    title: "Simple Newsletter Subscription",
    description:
      "A clean and minimal newsletter subscription section with email input and subscribe button. Perfect for straightforward email collection.",
    codeString: newsletterSubscriptionSimpleString,
    preview: <NewsletterSubscriptionSimplePreview />,
  },
  {
    id: "newsletter-subscription-modern",
    title: "Modern Newsletter Subscription",
    description:
      "A modern newsletter subscription with feature highlights, social proof, and a professional design. Includes success state and trust indicators.",
    codeString: newsletterSubscriptionModernString,
    preview: <NewsletterSubscriptionModernPreview />,
  },
  {
    id: "newsletter-subscription-ecosystem",
    title: "Ecosystem Newsletter Subscription",
    description:
      "An innovative newsletter subscription featuring a hexagonal grid layout and interconnected knowledge domains. Perfect for educational or tech platforms.",
    codeString: newsletterSubscriptionEcosystemString,
    preview: <NewsletterSubscriptionEcosystemPreview />,
  },
  {
    id: "newsletter-subscription-liquid",
    title: "Liquid Newsletter Subscription",
    description:
      "A dynamic newsletter subscription with animated liquid background effects and flowing design elements. Features smooth animations and modern aesthetics.",
    codeString: newsletterSubscriptionLiquidString,
    preview: <NewsletterSubscriptionLiquidPreview />,
  },
  {
    id: "newsletter-subscription-horizontal",
    title: "Horizontal Floating Newsletter",
    description:
      "A floating newsletter subscription that appears as a horizontal card with smooth animations. Perfect for non-intrusive email collection with close functionality.",
    codeString: newsletterSubscriptionHorizontalString,
    preview: <NewsletterSubscriptionHorizontal  />,
  },
];

export const NewsletterSubscriptionView = () => {
  const { setSections } = useOnThisPage();
  React.useEffect(() => {
    setSections(sections);
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
          { label: "Newsletter Subscription", path: "" },
        ]}
      />
      <PageTitle
        title="Newsletter Subscription"
        description="Showcase your newsletter subscription section with various designs and email input components. Choose from simple, modern, ecosystem, liquid, or floating horizontal layouts."
      />

      <Divider sx={{ my: 4 }} />

      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 6 }}>
          <SectionTitle
            title={section.title}
            description={section.description || ""}
            id={section.id}
          />
          <CodePreviewCopyWrapper
            codeString={section.codeString}
            preview={section.preview}
          />
        </Box>
      ))}
    </Box>
  );
};

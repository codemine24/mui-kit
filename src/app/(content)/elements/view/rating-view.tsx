"use client";
import { CodePreviewCopyWrapper } from "@/components/code-preview-copy-wrapper";
import { CustomBreadCrumbs } from "@/components/core/breadcrumbs";
import { PageTitle } from "@/components/core/page-title";
import { SectionTitle } from "@/components/core/section-title";
import { useOnThisPage } from "@/contexts/on-thispage-context";
import { PATHS } from "@/router/paths";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import React from "react";
import { ratingHalfStarString } from "../code-string/rating";
import { ratingBasicString } from "../code-string/rating/rating-basic-string";
import { ratingCharLimitString } from "../code-string/rating/rating-char-limit-string";
import { ratingEmojiString } from "../code-string/rating/rating-emoji-string";
import { ratingFeedbackString } from "../code-string/rating/rating-feedback-string";
import { ratingHeartString } from "../code-string/rating/rating-heart-string";
import { ratingHoverString } from "../code-string/rating/rating-hover-string";
import { ratingSubmitFeedbackString } from "../code-string/rating/rating-submit-feedback-string";
import { RatingBasicPreview } from "../components/rating/rating-basic-preview";
import { RatingCharLimitPreview } from "../components/rating/rating-char-limit-preview";
import { RatingEmojiPreview } from "../components/rating/rating-emoji-preview";
import { RatingFeedbackPreview } from "../components/rating/rating-feedback-preview";
import { RatingHalfStarPreview } from "../components/rating/rating-half-star-preview";
import { RatingHeartPreview } from "../components/rating/rating-heart-preview";
import { RatingHoverPreview } from "../components/rating/rating-hover-preview";
import { RatingSubmitFeedbackPreview } from "../components/rating/rating-submit-feedback-preview";

const sections = [
  {
    id: "rating-1",
    title: "Basic MUI Rating",
    description:
      "A basic customizable rating component built with Material UI.",
    codeString: ratingBasicString,
    preview: <RatingBasicPreview />,
  },
  {
    id: "rating-2",
    title: "Half-Star Steps Rating",
    description:
      "A customizable rating component built using Material UI. Supports half ratings and precision control.",
    codeString: ratingHalfStarString,
    preview: <RatingHalfStarPreview />,
  },
  {
    id: "rating-3",
    title: "Hover Preview Rating",
    description:
      "A rating component that previews label text dynamically on hover.",
    codeString: ratingHoverString,
    preview: <RatingHoverPreview />,
  },
  {
    id: "rating-4",
    title: "Emoji Label Rating",
    description:
      "A rating component with emoji-based dynamic labels for each star value.",
    codeString: ratingEmojiString,
    preview: <RatingEmojiPreview />,
  },
  {
    id: "rating-5",
    title: "Heart Icon Rating",
    description:
      "A custom rating component using heart icons instead of stars.",
    codeString: ratingHeartString,
    preview: <RatingHeartPreview />,
  },
  {
    id: "rating-6",
    title: "Rating with Feedback",
    description:
      "A customizable rating component built using Material UI. Supports half ratings, text feedback, and snackbar confirmation.",
    codeString: ratingFeedbackString,
    preview: <RatingFeedbackPreview />,
  },
  {
    id: "rating-7",
    title: "Rating with Character Limit",
    description: "Rating with character limit feedback and success alert.",
    codeString: ratingCharLimitString,
    preview: <RatingCharLimitPreview />,
  },
  {
    id: "rating-8",
    title: "Rating with Submit Feedback",
    description:
      "A rating component with feedback submission and success alert.",
    codeString: ratingSubmitFeedbackString,
    preview: <RatingSubmitFeedbackPreview />,
  },
];

export const RatingView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.RATING },
          { label: "Rating", path: "" },
        ]}
      />
      <PageTitle
        title="Rating"
        description="Material UI provides a base rating component, but we’ve extended it with multiple advanced use-cases like emoji labels, text feedback, precision control, animated interactions, and icon customizations."
      />

      <Divider sx={{ my: 4 }} />

      {sections.map((section) => (
        <Box key={section.id} sx={{ mb: 4 }}>
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

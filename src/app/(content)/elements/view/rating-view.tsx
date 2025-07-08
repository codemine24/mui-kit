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
import BasicRating from "../components/rating/Basic-rating";
import { BasicRatingString } from "../code-string/rating/basic-rating-string";
import HalfStar from "../components/rating/Half-star-rating";
import { HalfRating } from "../code-string/rating";
import HoverPreview from "../components/rating/HoverPreview-rating";
import { HoverPreviewString } from "../code-string/rating/hoverPreview-rating-string";
import HeartIcon from "../components/rating/HeartIconRating";
import RatingWithFeedback from "../components/rating/RatingWithFB-rating";
import { RatingWithFeedBackString } from "../code-string/rating/rating-with-feedback-string";
import RatingWithEmojiLabel from "../components/rating/RatingWithEmojiLable-rating";
import RatingWithSubmitSnackbar from "../components/rating/RatingWithSubmitSnackbar-rating";
import RatingWithCharLimit from "../components/rating/RatingWithCharLimit-rating";
import { RatingWithEmojiLabelString } from "../code-string/rating/rating-with-emoji-label-string";
import { HeartIconString } from "../code-string/rating/heart-icon-string";
import { RatingWithCharLimitString } from "../code-string/rating/rating-with-charLimit-string";
import { RatingWithSubmitSnackbarString } from "../code-string/rating/rating-with-submit-snackbar-string";

const sections = [
  {
    id: "rating-1",
    title: "Basic MUI Rating",
    description: "A basic customizable rating component built with Material UI.",
    codeString: BasicRatingString,
    preview: <BasicRating />
  },
  {
    id: "rating-2",
    title: "Half-Star Steps Rating",
    description: "A customizable rating component built using Material UI. Supports half ratings and precision control.",
    codeString: HalfRating,
    preview: <HalfStar />
  },
  {
    id: "rating-3",
    title: "Hover Preview Rating",
    description: "A rating component that previews label text dynamically on hover.",
    codeString: HoverPreviewString,
    preview: <HoverPreview />
  },
  {
    id: "rating-4",
    title: "Emoji Label Rating",
    description: "A rating component with emoji-based dynamic labels for each star value.",
    codeString: RatingWithEmojiLabelString,
    preview: <RatingWithEmojiLabel />
  },
  {
    id: "rating-5",
    title: "Heart Icon Rating",
    description: "A custom rating component using heart icons instead of stars.",
    codeString: HeartIconString,
    preview: <HeartIcon />
  },
  {
    id: "rating-6",
    title: "Rating with Feedback",
    description: "A customizable rating component built using Material UI. Supports half ratings, text feedback, and snackbar confirmation.",
    codeString: RatingWithFeedBackString,
    preview: <RatingWithFeedback />
  },
  {
    id: "rating-7",
    title: "Rating with Character Limit",
    description: "A rating component with a multiline feedback box and character counter.",
    codeString: RatingWithCharLimitString,
    preview: <RatingWithCharLimit />
  },
  {
    id: "rating-8",
    title: "Rating with Submit Feedback",
    description: "A rating component with feedback submission and success alert.",
    codeString: RatingWithSubmitSnackbarString,
    preview: <RatingWithSubmitSnackbar />
  },
];

export const Rating = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.ELEMENTS.RATING },
          { label: "Rating", path: "" }
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

          <CodePreviewCopyWrapper codeString={section.codeString} preview={section.preview} />
        </Box>
      ))}
    </Box>
  );
};

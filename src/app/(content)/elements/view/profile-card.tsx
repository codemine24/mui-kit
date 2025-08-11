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
import { GlassProfileCard } from "../components/profile-card";
import {OutlineProfileCard } from "../components/profile-card/outline-profile-card";
import { DarkFloatingProfileCard } from "../components/profile-card/dark-floating-profile-card";
import { AccentProfileCard } from "../components/profile-card/accent-profile-card";
import { ClassicProfileCard } from "../components/profile-card/classic-profile-card";
import { SidePhotoProfileCard } from "../components/profile-card/side-photo-profile-card";
import { TechStackProfileCard } from "../components/profile-card/tach-stack-profile-card";
import { BannerProfileCard } from "../components/profile-card/banner-profile-card";
import { FullCoverProfileCard } from "../components/profile-card/full-cover-profile-card";
import { AvatarCoverProfileCard } from "../components/profile-card/avater-cover-profile-card";
import { glassProfileCard } from "../code-string/profile-card/glass-profile-card-string";
import { accentProfileCardString, avaterCoverProileCardString, bannerProfileCard, classicProfileCard, darkFloatingProfileCardString, fullCoverProfileCardString, outlineProfileCardString, sidePhotoProfileCard, TachStackProfileCardString } from "../code-string/profile-card";

const sections = [
  {
  id: "rating-1",
  title: "Basic Profile Card",
  description: "A clean and simple profile card showcasing user avatar, name, bio, and social links with a modern design.",
  codeString: glassProfileCard ,
  preview: <GlassProfileCard />,
  },
  {
    id: "profile-2",
    title: "Neon Profile Card",
    description: "A Neon profile card with avatar, name, bio, and social media icons designed for simplicity and clarity.",
    codeString: darkFloatingProfileCardString,
    preview: <DarkFloatingProfileCard/>
},
  {
    id: "profile-3",
    title: "Outline Profile Card",
    description: "A clean profile card with subtle outline borders, showing avatar, name, bio, and social media icons for a minimalistic design.",
    codeString: outlineProfileCardString,
    preview: <OutlineProfileCard/>
},
  {
    id: "profile-4",
    title: "Accent Profile Card",
    description: "A stylish profile card featuring accent colors and clean layout to highlight avatar, name, bio.",
    codeString: accentProfileCardString,
    preview: <AccentProfileCard/>
},
  {
    id: "profile-5",
    title: "Classic Profile Card",
    description: "A timeless profile card design with centered avatar, name, role, bio, and social links laid out cleanly and simply.",
    codeString: classicProfileCard,
    preview: <ClassicProfileCard/>
},
  {
    id: "profile-6",
    title: "Side Photo Profile Card",
    description: "A profile card layout with the user’s photo on one side and the details (name, bio, role, socials) on the other for a balanced design.",
    codeString: sidePhotoProfileCard,
    preview: <SidePhotoProfileCard/>
},
  {
    id: "profile-7",
    title: "Tech Stack Profile Card",
    description: "Profile card emphasizing the user’s technology skills with clear display of tech stack chips alongside avatar and bio.",
    codeString: TachStackProfileCardString,
    preview: <TechStackProfileCard/>
},
  {
    id: "profile-8",
    title: "Banner Profile Card",
    description: "Profile card with a full-width banner image background behind the avatar, showing name, bio, tech stack, and social links.",
    codeString: bannerProfileCard,
    preview: <BannerProfileCard/>
},
  {
    id: "profile-9",
    title: "Full Cover Profile Image Card",
    description: "Profile card with a full cover background image, overlaying user details including name, role, bio, tech stack, and social links on a translucent panel.",
    codeString: fullCoverProfileCardString,
    preview: <FullCoverProfileCard/>
},
  {
    id: "profile-10",
    title: "Avatar Cover Profile Card",
    description: "Profile card where the avatar image covers the entire card background with a dark overlay, displaying user info and social links on a transparent overlay.",
    codeString: avaterCoverProileCardString,
    preview: <AvatarCoverProfileCard/>
},
];


export const ProfileCardView = () => {
  const { setSections } = useOnThisPage();

  React.useEffect(() => {
    setSections(sections.map((s) => ({ title: s.title, id: s.id })));
  }, [setSections]);

  return (
    <Box>
      <CustomBreadCrumbs
        pathArr={[
          { label: "Elements", path: PATHS.BLOCKS.PROFILE_CARD },
          { label: "Profile Card", path: "" }
        ]}
      />
      <PageTitle
        title="Profile Card"
        description="A sleek and modern profile card showcasing a user’s avatar, name, bio, tech stack, role, and social media links. Designed with clean layouts and subtle effects to highlight personal information clearly and attractively, perfect for portfolios, team pages, or social profiles."
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

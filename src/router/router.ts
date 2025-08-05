import { TContentSidebarMode } from "@/types/content.types";
import { PATHS } from "./paths";

interface IBaseSidebarGroup {
  key: TContentSidebarMode;
  label: string;
  path: string;
  items: { label: string; path: string }[];
}

interface IButton extends IBaseSidebarGroup {
  type: "button";
  icon: string;
}

interface IGroup extends IBaseSidebarGroup {
  type: "group";
  icon?: string;
}

interface ISingle extends IBaseSidebarGroup {
  type: "single";
  icon?: string;
}

type ContentSidebarPathGroup = IButton | IGroup | ISingle;

// do not change this. add new item on paths.ts > elements
export const elementsArr = Object.entries(PATHS.ELEMENTS)
  .map(([key, path]) => ({
    label: key
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    path,
  }))
  .sort((a, b) => {
    if (a.label === "Overview") return -1;
    if (b.label === "Overview") return 1;
    return a.label.localeCompare(b.label);
  });

// do not change this. add new item on paths.ts > blocks
export const blocksArr = Object.entries(PATHS.BLOCKS)
  .map(([key, path]) => ({
    label: key
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    path,
  }))
  .sort((a, b) => {
    if (a.label === "Overview") return -1;
    if (b.label === "Overview") return 1;
    return a.label.localeCompare(b.label);
  });

// content sidebar
export const contentSidebarPathGroups: ContentSidebarPathGroup[] = [
  {
    key: "INTRODUCTION",
    label: "Introduction",
    path: PATHS.DOCS.INTRO,
    type: "button",
    icon: "mdi:book-open-page-variant-outline",
    items: [],
  },
  {
    key: "INSTALLATION",
    label: "Installation",
    path: PATHS.DOCS.INSTALL,
    type: "button",
    icon: "mdi:cog-outline",
    items: [],
  },
  {
    key: "ELEMENTS",
    label: "Elements",
    items: elementsArr,
    path: PATHS.ELEMENTS.OVERVIEW,
    type: "group",
  },
  {
    key: "BLOCKS",
    label: "Blocks",
    items: blocksArr,
    path: PATHS.BLOCKS.OVERVIEW,
    type: "group",
  },
];

// header navigation
export const navItems = [
  { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
  { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
  { label: "Why?", path: PATHS.ABOUT },
];

// footer
export const footerItems = [
  { label: "Report bug", path: PATHS.FOOTER.REPORT_BUG },
  { label: "Changelog", path: PATHS.FOOTER.CHANGE_LOG },
  { label: "Contact", path: PATHS.FOOTER.CONTACT },
];

// featured components
export const featuredComponents = [
  {
    label: "Accordion",
    url: PATHS.ELEMENTS.ACCORDION,
    icon: "vaadin:accordion-menu",
    count: 8,
  },
  {
    label: "Breadcrumbs",
    url: PATHS.ELEMENTS.BREADCRUMB,
    icon: "tdesign:component-breadcrumb",
    count: 7,
  },
  {
    label: "Button Group",
    url: PATHS.ELEMENTS.BUTTON_GROUP,
    icon: "fluent:tab-group-20-regular",
    count: 12,
  },
  {
    label: "carousel",
    url: PATHS.ELEMENTS.CAROUSEL,
    icon: "material-symbols-light:view-carousel-outline",
    count: 14,
  },
  {
    label: "DND",
    url: PATHS.ELEMENTS.DND,
    icon: "stash:drag-squares-horizontal",
    count: 5,
  },
  {
    label: "Fancy Background",
    url: PATHS.ELEMENTS.FANCY_BACKGROUND,
    icon: "material-symbols-light:square-outline-rounded",
    count: 11,
  },
  {
    label: "pagination",
    url: PATHS.ELEMENTS.PAGINATION,
    icon: "lineicons:pagination",
    count: 5,
  },
  {
    label: "Progress",
    url: PATHS.ELEMENTS.PROGRESSBAR,
    icon: "ri:progress-1-line",
    count: 12,
  },
  {
    label: "Skeleton",
    url: PATHS.ELEMENTS.SKELETON,
    icon: "heroicons:bars-3-bottom-left-20-solid",
    count: 10,
  },
  {
    label: "Stepper",
    url: PATHS.ELEMENTS.STEPPER,
    icon: "carbon:popup",
    count: 15,
  },
  {
    label: "Timeline",
    url: PATHS.ELEMENTS.TIMELINE,
    icon: "clarity:timeline-line",
    count: 13,
  },
  {
    label: "Uploader",
    url: PATHS.ELEMENTS.UPLOADER,
    icon: "solar:upload-outline",
    count: 6,
  },
];

// featured blocks
export const featuredBlocks = [
  {
    label: "About",
    url: PATHS.BLOCKS.ABOUT,
    icon: "ix:about",
    count: 5,
  },
  {
    label: "Call To Action",
    url: PATHS.BLOCKS.CALL_TO_ACTION,
    icon: "material-symbols-light:call-to-action-outline",
    count: 3,
  },

  {
    label: "Coming Soon",
    url: PATHS.BLOCKS.COMING_SOON,
    icon: "hugeicons:coming-soon-02",
    count: 3,
  },
  {
    label: "Contact",
    url: PATHS.BLOCKS.CONTACT,
    icon: "hugeicons:contact",
    count: 3,
  },
  {
    label: "Faq",
    url: PATHS.BLOCKS.FAQ,
    icon: "qlementine-icons:faq-16",
    count: 3,
  },
  {
    label: "Pricing Table",
    url: PATHS.BLOCKS.PRICING_TABLE,
    icon: "material-symbols-light:table-outline",
    count: 2,
  },
  {
    label: "Hero",
    url: PATHS.BLOCKS.HERO,
    icon: "pixelarticons:section",
    count: 3,
  },
  {
    label: "Footer",
    url: PATHS.BLOCKS.FOOTER,
    icon: "fluent-mdl2:footer",
    count: 3,
  },
];

// sitemap routes. do not change
export const sitemapRoutes = [
  PATHS.DOCS.INTRO,
  PATHS.DOCS.INSTALL,
  PATHS.ELEMENTS.OVERVIEW,
  PATHS.ABOUT,
  ...elementsArr.map((item) => item.path),
];

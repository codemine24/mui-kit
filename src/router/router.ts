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
    label: "DND",
    url: PATHS.ELEMENTS.DND,
    icon: "bi:grid-1x2",
  },
  {
    label: "Editor",
    url: PATHS.ELEMENTS.EDITOR,
    icon: "material-symbols-light:text-ad-outline-sharp",
  },
  {
    label: "Carousel",
    url: PATHS.ELEMENTS.EDITOR,
    icon: "bx:carousel",
  },
  {
    label: "Timeline",
    url: PATHS.ELEMENTS.TIMELINE,
    icon: "gravity-ui:list-timeline",
  },
  {
    label: "Accordion",
    url: PATHS.ELEMENTS.ACCORDION,
    icon: "tabler:layout-list",
  },
  {
    label: "Alert",
    url: PATHS.ELEMENTS.ALERT,
    icon: "tabler:alert-triangle",
  },
  {
    label: "Avatar",
    url: PATHS.ELEMENTS.AVATAR,
    icon: "tabler:user-circle",
  },
  {
    label: "Button",
    url: PATHS.ELEMENTS.BUTTON,
    icon: "proicons:button",
  },
  {
    label: "Card",
    url: PATHS.ELEMENTS.CARD,
    icon: "solar:card-linear",
  },
  {
    label: "Dialog",
    url: PATHS.ELEMENTS.DIALOG,
    icon: "carbon:popup",
  },
  {
    label: "Stepper",
    url: PATHS.ELEMENTS.STEPPER,
    icon: "tabler:list-numbers",
  },
];

// featured blocks
export const featuredBlocks = [
  {
    label: "Pricing Menu",
    url: PATHS.BLOCKS.PRICING_MENU,
    icon: "tabler:currency-dollar",
  },
  {
    label: "About",
    url: PATHS.BLOCKS.ABOUT,
    icon: "mdi:account-question-outline",
  },
  {
    label: "Call To Action",
    url: PATHS.BLOCKS.CALL_TO_ACTION,
    icon: "tabler:click",
  },
  {
    label: "Coming Soon",
    url: PATHS.BLOCKS.COMING_SOON,
    icon: "tabler:clock-hour-10",
  },
  { label: "Contact", url: PATHS.BLOCKS.CONTACT, icon: "tabler:phone-call" },
  { label: "Copyright", url: PATHS.BLOCKS.COPYRIGHT, icon: "mdi:copyright" },
  { label: "FAQ", url: PATHS.BLOCKS.FAQ, icon: "tabler:question-mark" },
  {
    label: "Feature",
    url: PATHS.BLOCKS.FEATURE_BENEFIT,
    icon: "tabler:star",
  },
  {
    label: "Feature Product",
    url: PATHS.BLOCKS.FEATURE_PRODUCT,
    icon: "tabler:package",
  },
  {
    label: "Footer",
    url: PATHS.BLOCKS.FOOTER,
    icon: "tabler:layout-navbar-collapse",
  },
  { label: "Hero", url: PATHS.BLOCKS.HERO, icon: "tabler:layout-dashboard" },

  {
    label: "Testimonial",
    url: PATHS.BLOCKS.TESTIMONIAL_SLIDER,
    icon: "tabler:message-chatbot",
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

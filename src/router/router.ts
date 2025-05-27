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
  .sort((a, b) => a.label.localeCompare(b.label));

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
  .sort((a, b) => a.label.localeCompare(b.label));

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
    key: "COMPONENTS",
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
  {
    key: "FORM",
    label: "Form",
    path: PATHS.FORM.ROOT,
    type: "single",
    items: [],
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
    label: "Badge",
    url: PATHS.ELEMENTS.BADGE,
    icon: "tabler:badge",
  },
  {
    label: "Button",
    url: PATHS.ELEMENTS.BUTTON,
    icon: "tabler:square-rounded-arrow-right",
  },
  {
    label: "Button Group",
    url: PATHS.ELEMENTS.BUTTON_GROUP,
    icon: "tabler:layout-grid",
  },
  {
    label: "Card",
    url: PATHS.ELEMENTS.CARD,
    icon: "tabler:id",
  },
  {
    label: "Dialog",
    url: PATHS.ELEMENTS.DIALOG,
    icon: "tabler:message-2",
  },
  {
    label: "Slider",
    url: PATHS.ELEMENTS.SLIDER,
    icon: "tabler:slideshow",
  },
  {
    label: "Stepper",
    url: PATHS.ELEMENTS.STEPPER,
    icon: "tabler:list-numbers",
  },
  {
    label: "Tab",
    url: PATHS.ELEMENTS.TABS,
    icon: "tabler:layout-navbar-expand",
  },
];

// featured blocks
export const featuredBlocks = [
  {
    label: "Mega Menu",
    url: PATHS.BLOCKS.MEGA_MENU,
    icon: "tabler:layout-navbar",
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
    label: "Focus Boxes",
    url: PATHS.BLOCKS.FOCUS_BOXES,
    icon: "tabler:focus-2",
  },
  {
    label: "Footer",
    url: PATHS.BLOCKS.FOOTER,
    icon: "tabler:layout-navbar-collapse",
  },
  { label: "Gallery", url: PATHS.BLOCKS.GALLERY, icon: "tabler:photo" },
  { label: "Logo Grid", url: PATHS.BLOCKS.LOGO_GRID, icon: "tabler:grid-dots" },
  { label: "Hero", url: PATHS.BLOCKS.HERO, icon: "tabler:layout-dashboard" },
  {
    label: "Pricing Menu",
    url: PATHS.BLOCKS.PRICING_MENU,
    icon: "tabler:currency-dollar",
  },
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

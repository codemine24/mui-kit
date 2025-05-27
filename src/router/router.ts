import { TContentSidebarMode } from "@/types/content.types";
import { PATHS } from "./paths";

export const elements = [
  { label: "Overview", path: PATHS.ELEMENTS.OVERVIEW },
  { label: "Accordion", path: PATHS.ELEMENTS.ACCORDION },
  { label: "Alert", path: PATHS.ELEMENTS.ALERT },
  { label: "Autocomplete", path: PATHS.ELEMENTS.AUTOCOMPLETE },
  { label: "Avatar", path: PATHS.ELEMENTS.AVATAR },
  { label: "Breadcrumb", path: PATHS.ELEMENTS.BREADCRUMB },
  { label: "Button", path: PATHS.ELEMENTS.BUTTON },
  { label: "Button Group", path: PATHS.ELEMENTS.BUTTON_GROUP },
  { label: "Bottom Navigation", path: PATHS.ELEMENTS.BUTTON_NAVIGATION },
  { label: "Card", path: PATHS.ELEMENTS.CARD },
  { label: "Checkbox", path: PATHS.ELEMENTS.CHECKBOX },
  { label: "Chip", path: PATHS.ELEMENTS.CHIP },
  { label: "Dialog", path: PATHS.ELEMENTS.DIALOG },
  { label: "Drawer", path: PATHS.ELEMENTS.DRAWER },
  {
    label: "Floating Action Button",
    path: PATHS.ELEMENTS.FLOATING_ACTION_BUTTON,
  },
  { label: "Pagination", path: PATHS.ELEMENTS.PAGINATION },
  { label: "Popover", path: PATHS.ELEMENTS.POPOVER },
  { label: "Progress", path: PATHS.ELEMENTS.PROGRESS },
  { label: "Radio Group", path: PATHS.ELEMENTS.RADIO_GROUP },
  { label: "Rating", path: PATHS.ELEMENTS.RATING },
  { label: "Select", path: PATHS.ELEMENTS.SELECT },
  { label: "Skeleton", path: PATHS.ELEMENTS.SKELETON },
  { label: "Slider", path: PATHS.ELEMENTS.SLIDER },
  { label: "Speed Dial", path: PATHS.ELEMENTS.SPEED_DIAL },
  { label: "Stepper", path: PATHS.ELEMENTS.STEPPER },
  { label: "Switch", path: PATHS.ELEMENTS.SWITCH },
  { label: "Table", path: PATHS.ELEMENTS.TABLE },
  { label: "Tabs", path: PATHS.ELEMENTS.TABS },
  { label: "Text Field", path: PATHS.ELEMENTS.TEXT_FIELD },
  { label: "Textarea", path: PATHS.ELEMENTS.TEXTAREA },
  { label: "Toggle Button", path: PATHS.ELEMENTS.TOGGLE_BUTTON },
  { label: "Tooltip", path: PATHS.ELEMENTS.TOOLTIP },
  { label: "Transfer List", path: PATHS.ELEMENTS.TRANSFER_LIST },
  { label: "Typography", path: PATHS.ELEMENTS.TYPOGRAPHY },
];

const blockElements = [
  { label: "Overview", path: PATHS.BLOCKS.OVERVIEW },
  { label: "Gallery", path: PATHS.BLOCKS.GALLERY },
  { label: "Jumbotron", path: PATHS.BLOCKS.JUMBOTRON },
  { label: "Mega Menu", path: PATHS.BLOCKS.MEGA_MENU },
  { label: "Coming Soon", path: PATHS.BLOCKS.COMING_SOON },
];

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
    items: elements,
    path: PATHS.ELEMENTS.OVERVIEW,
    type: "group",
  },
  {
    key: "BLOCKS",
    label: "Blocks",
    items: blockElements,
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

export const navItems = [
  // { label: "Docs", path: PATHS.DOCS.INSTALL },
  { label: "Elements", path: PATHS.ELEMENTS.OVERVIEW },
  { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
  { label: "Why?", path: PATHS.ABOUT },
];

// sitemap routes. do not change
export const sitemapRoutes = [
  PATHS.DOCS.INTRO,
  PATHS.DOCS.INSTALL,
  PATHS.ELEMENTS.OVERVIEW,
  PATHS.ABOUT,
  ...elements.map((item) => item.path),
];

export const footerItems = [
  { label: "Report bug", path: PATHS.FOOTER.REPORT_BUG },
  { label: "Changelog", path: PATHS.FOOTER.CHANGE_LOG },
  { label: "Contact", path: PATHS.FOOTER.CONTACT },
];

import { TContentSidebarMode } from "@/types/content.types";
import { PATHS } from "./paths";

export const elements = [
  { label: "Overview", path: PATHS.COMPONENTS.OVERVIEW },
  { label: "Accordion", path: PATHS.COMPONENTS.ACCORDION },
  { label: "Alert", path: PATHS.COMPONENTS.ALERT },
  { label: "Autocomplete", path: PATHS.COMPONENTS.AUTOCOMPLETE },
  { label: "Avatar", path: PATHS.COMPONENTS.AVATAR },
  { label: "Breadcrumb", path: PATHS.COMPONENTS.BREADCRUMB },
  { label: "Button", path: PATHS.COMPONENTS.BUTTON },
  { label: "Button Group", path: PATHS.COMPONENTS.BUTTON_GROUP },
  { label: "Bottom Navigation", path: PATHS.COMPONENTS.BUTTON_NAVIGATION },
  { label: "Card", path: PATHS.COMPONENTS.CARD },
  { label: "Checkbox", path: PATHS.COMPONENTS.CHECKBOX },
  { label: "Chip", path: PATHS.COMPONENTS.CHIP },
  { label: "Dialog", path: PATHS.COMPONENTS.DIALOG },
  { label: "Drawer", path: PATHS.COMPONENTS.DRAWER },
  {
    label: "Floating Action Button",
    path: PATHS.COMPONENTS.FLOATING_ACTION_BUTTON,
  },
  { label: "Pagination", path: PATHS.COMPONENTS.PAGINATION },
  { label: "Popover", path: PATHS.COMPONENTS.POPOVER },
  { label: "Progress", path: PATHS.COMPONENTS.PROGRESS },
  { label: "Radio Group", path: PATHS.COMPONENTS.RADIO_GROUP },
  { label: "Rating", path: PATHS.COMPONENTS.RATING },
  { label: "Select", path: PATHS.COMPONENTS.SELECT },
  { label: "Skeleton", path: PATHS.COMPONENTS.SKELETON },
  { label: "Slider", path: PATHS.COMPONENTS.SLIDER },
  { label: "Speed Dial", path: PATHS.COMPONENTS.SPEED_DIAL },
  { label: "Stepper", path: PATHS.COMPONENTS.STEPPER },
  { label: "Switch", path: PATHS.COMPONENTS.SWITCH },
  { label: "Table", path: PATHS.COMPONENTS.TABLE },
  { label: "Tabs", path: PATHS.COMPONENTS.TABS },
  { label: "Text Field", path: PATHS.COMPONENTS.TEXT_FIELD },
  { label: "Textarea", path: PATHS.COMPONENTS.TEXTAREA },
  { label: "Toggle Button", path: PATHS.COMPONENTS.TOGGLE_BUTTON },
  { label: "Tooltip", path: PATHS.COMPONENTS.TOOLTIP },
  { label: "Transfer List", path: PATHS.COMPONENTS.TRANSFER_LIST },
  { label: "Typography", path: PATHS.COMPONENTS.TYPOGRAPHY },
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
    label: "Components",
    items: elements,
    path: PATHS.COMPONENTS.OVERVIEW,
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
  { label: "Components", path: PATHS.COMPONENTS.OVERVIEW },
  { label: "Blocks", path: PATHS.BLOCKS.OVERVIEW },
  { label: "Why?", path: PATHS.CONTRIBUTE },
];

// sitemap routes. do not change
export const sitemapRoutes = [
  PATHS.DOCS.INTRO,
  PATHS.DOCS.INSTALL,
  PATHS.COMPONENTS.OVERVIEW,
  PATHS.CONTRIBUTE,
  ...elements.map((item) => item.path),
];

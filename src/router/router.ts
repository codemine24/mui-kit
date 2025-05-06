import { PATHS } from "./paths";
import { TContentSidebarMode } from "@/types/content.types";

export const docs = [
  { label: "Introduction", path: PATHS.DOCS.INTRO },
  { label: "Installation", path: PATHS.DOCS.INSTALL },
];

export const elements = [
  { label: "Overview", path: PATHS.ELEMENTS.OVERVIEW },
  { label: "Accordion", path: PATHS.ELEMENTS.ACCORDION },
  { label: "Alert", path: PATHS.ELEMENTS.ALERT },
  { label: "App Bar", path: PATHS.ELEMENTS.APP_BAR },
  { label: "Autocomplete", path: PATHS.ELEMENTS.AUTOCOMPLETE },
  { label: "Avatar", path: PATHS.ELEMENTS.AVATAR },
  { label: "Backdrop", path: PATHS.ELEMENTS.BACKDROP },
  { label: "Badge", path: PATHS.ELEMENTS.BADGE },
  { label: "Breadcrumb", path: PATHS.ELEMENTS.BREADCRUMB },
  { label: "Button", path: PATHS.ELEMENTS.BUTTON },
  { label: "Button Group", path: PATHS.ELEMENTS.BUTTON_GROUP },
  { label: "Button Navigation", path: PATHS.ELEMENTS.BUTTON_NAVIGATION },
  { label: "Card", path: PATHS.ELEMENTS.CARD },
  { label: "Checkbox", path: PATHS.ELEMENTS.CHECKBOX },
  { label: "Chip", path: PATHS.ELEMENTS.CHIP },
  { label: "Dialog", path: PATHS.ELEMENTS.DIALOG },
  { label: "Divider", path: PATHS.ELEMENTS.DIVIDER },
  { label: "Drawer", path: PATHS.ELEMENTS.DRAWER },
  {
    label: "Floating Action Button",
    path: PATHS.ELEMENTS.FLOATING_ACTION_BUTTON,
  },
  { label: "Grid", path: PATHS.ELEMENTS.GRID },
  { label: "Image List", path: PATHS.ELEMENTS.IMAGE_LIST },
  { label: "List", path: PATHS.ELEMENTS.LIST },
  { label: "Menu", path: PATHS.ELEMENTS.MENU },
  { label: "Modal", path: PATHS.ELEMENTS.MODAL },
  { label: "Pagination", path: PATHS.ELEMENTS.PAGINATION },
  { label: "Paper", path: PATHS.ELEMENTS.PAPER },
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

export const contentSidebarPathGroups: {
  key: TContentSidebarMode;
  label: string;
  items: { path: string; label: string }[];
  path?: string;
}[] = [
  { key: "DOCS", label: "Docs", items: docs, path: PATHS.DOCS.ROOT },
  {
    key: "ELEMENTS_COMPONENTS",
    label: "Elements",
    items: elements,
    path: PATHS.ELEMENTS.OVERVIEW,
  },
  { key: "BLOCKS", label: "Blocks", path: PATHS.BLOCKS.ROOT, items: [] },
  {
    key: "TEMPLATES",
    label: "Templates",
    path: PATHS.TEMPLATES.ROOT,
    items: [],
  },
  {
    key: "DASHBOARD",
    label: "Dashboard",
    path: PATHS.DASHBOARD.ROOT,
    items: [],
  },
  { key: "FORM", label: "Form", path: PATHS.FORM.ROOT, items: [] },
];

export const navItems = [
  { label: "Docs", path: PATHS.DOCS.INSTALL },
  { label: "Kit", path: PATHS.ELEMENTS.OVERVIEW },
  { label: "Contribute ♡", path: PATHS.CONTRIBUTE },
];

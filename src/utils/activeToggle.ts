import { PATHS } from "@/router/paths";

  export const getActiveToggle = (pathname: string) => {
    if (pathname == PATHS.BLOCKS.OVERVIEW) {
      return "BLOCKS";
    } else if (pathname == PATHS.ELEMENTS.OVERVIEW) {
      return "COMPONENTS";
    }
  };

export const getActiveToggle = (pathname: string) => {
  if(pathname.includes("blocks")){
    return "BLOCKS"
  }else if(pathname.includes("elements")){
    return "ELEMENTS"
  }
  // if (pathname == PATHS.BLOCKS.OVERVIEW) {
  //   return "BLOCKS";
  // } else if (pathname == PATHS.ELEMENTS.OVERVIEW) {
  //   return "ELEMENTS";
  // }
};

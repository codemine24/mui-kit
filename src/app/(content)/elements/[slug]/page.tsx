import { Box } from "@mui/material";
import { AccordionView } from "../view/accordion-view";
import { ButtonView } from "../view/button-view";
import { AlertView } from "../view/alert-view";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const elementView = () => {
    switch (slug) {
      case "accordion":
        return <AccordionView />;
      case "alert":
        return <AlertView />;
      case "button":
        return <ButtonView />;
      default:
        return <Box>Buttons</Box>;
    }
  };
  return <Box>{elementView()}</Box>;
}

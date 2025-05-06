import { Box } from "@mui/material";
import { AccordionView } from "../components/accordion-view";
import { ButtonView } from "../components/button-view";

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
      case "button":
        return <ButtonView />;
      default:
        return <Box>Buttons</Box>;
    }
  };
  return <Box>{elementView()}</Box>;
}

import { Container } from "@mui/material";
import { Metadata } from "next";
import { ContactView } from "./contact-view";

export const metadata: Metadata = {
  title: "Report a Bug",
  description: "A complete set of open source components for Material UI",
};

export default function Contribute() {
  return (
    <Container maxWidth={"xl"}>
      <ContactView />
    </Container>
  );
}

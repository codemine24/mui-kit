import Container from "@mui/material/Container";
import { Metadata } from "next";
import { AboutView } from "./about-view";

export const metadata: Metadata = {
  title: "Contribute",
  description: "A complete set of open source components for Material UI"
};

export default function Contribute() {
  return (
    <Container maxWidth={"xl"}>
      <AboutView />
    </Container>
  );
}

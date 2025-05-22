import { Container } from "@mui/material";
import { ContributeView } from "./contribute-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute",
  description: "A complete set of open source components for Material UI",
};


export default function Contribute() {
  return (
    <Container maxWidth={"xl"}>
      <ContributeView />
    </Container>
  );
}

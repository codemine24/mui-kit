import Container from "@mui/material/Container";
import { Metadata } from "next";
import { ReportBugView } from "./report-bug";

export const metadata: Metadata = {
  title: "Report a Bug",
  description: "A complete set of open source components for Material UI"
};

export default function Contribute() {
  return (
    <Container maxWidth={"xl"}>
      <ReportBugView />
    </Container>
  );
}

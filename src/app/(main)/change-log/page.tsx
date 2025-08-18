import Container from "@mui/material/Container";
import { Metadata } from "next";
import { ChangeLogView } from "./change-log-view";

export const metadata: Metadata = {
  title: "Change Log",
  description: "A complete set of open source components for Material UI"
};

export default function Contribute() {
  return (
    <Container maxWidth={"xl"} sx={{ pt: 10 }}>
      <ChangeLogView />
    </Container>
  );
}

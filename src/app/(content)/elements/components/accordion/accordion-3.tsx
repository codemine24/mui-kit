"use client";

import * as React from "react";
import MuiAccordion, { accordionClasses } from "@mui/material/Accordion";
import MuiAccordionSummary, { accordionSummaryClasses } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography, { typographyClasses } from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const Accordion = styled(MuiAccordion)(() => ({
  boxShadow: "none",
  margin: 0,
  [`&.${accordionClasses.expanded}`]: {
    marginBottom: 10,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
  },
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: "rgba(0, 0, 0, 0.70)",
  borderBottom: "2px solid",
  borderColor: theme.palette.divider,
  [`& .${typographyClasses.root}`]: {
    fontWeight: 600
  },
  [`&.${accordionSummaryClasses.expanded}`]: {
    border: "none",
    minHeight: "44px"
  },
  [`& .${accordionSummaryClasses.content}.${accordionSummaryClasses.expanded}`]: {
    margin: "0px"
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    color: "rgba(0, 0, 0, 0.70)"
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: "rgba(0, 0, 0, 0.70)",
  padding: "8px 16px 16px"
}));

export default function AccordionExample() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      {["panel1", "panel2", "panel3"].map((panelId, index) => (
        <Accordion key={panelId} expanded={expanded === panelId} onChange={handleChange(panelId)}>
          <AccordionSummary
            expandIcon={<ArrowCircleDownIcon />}
            aria-controls={`${panelId}-content`}
            id={`${panelId}-header`}>
            <Typography component="span">{`Accordion ${index + 1}`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

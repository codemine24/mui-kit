"use client";

import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, { accordionSummaryClasses } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Accordion = styled(MuiAccordion)(() => ({
  marginBottom: 8,
  borderRadius: "8px",
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  [`&.${accordionSummaryClasses.expanded}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: "0px 0px",
    minHeight: "44px",
    [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
      color: "white"
    }
  },
  [`& .${accordionSummaryClasses.content}.${accordionSummaryClasses.expanded}`]: {
    margin: "0px"
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.70)",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px"
}));

export default function AccordionExample() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto" }}>
      <Stack direction="row" spacing={2}>
        <Box>
          {["panel1", "panel3", "panel5"].map((panelId, index) => (
            <Accordion
              key={panelId}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}>
              <AccordionSummary
                expandIcon={expanded === panelId ? <RemoveIcon /> : <AddIcon />}
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}>
                <Typography component="span">{`Accordion ${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box>
          {["panel2", "panel4", "panel6"].map((panelId, index) => (
            <Accordion
              key={panelId}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}>
              <AccordionSummary
                expandIcon={expanded === panelId ? <RemoveIcon /> : <AddIcon />}
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}>
                <Typography component="span">{`Accordion ${index + 1}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

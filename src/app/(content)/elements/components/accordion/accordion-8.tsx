"use client";

import * as React from "react";
import MuiAccordion, { accordionClasses } from "@mui/material/Accordion";
import MuiAccordionSummary, { accordionSummaryClasses } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography, { typographyClasses } from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ApiIcon from "@mui/icons-material/Api";
import AppsIcon from "@mui/icons-material/Apps";
import { alpha } from "@mui/material/styles";

const Accordion = styled(MuiAccordion)(() => ({
  boxShadow: "none",
  padding: "10px",
  marginBottom: 8,
  [`&.${accordionClasses.expanded}`]: {
    marginBottom: 8,
    marginTop: 8
  },
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled(MuiAccordionSummary)(() => ({
  padding: 0,
  [`& .${typographyClasses.root}`]: {
    fontWeight: 600
  },
  [`&.${accordionSummaryClasses.expanded}`]: {
    minHeight: "44px"
  },
  [`& .${accordionSummaryClasses.content}.${accordionSummaryClasses.expanded}`]: {
    margin: "0px"
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "8px 8px 8px 32px"
}));

export default function AccordionExample() {
  const [expanded, setExpanded] = React.useState<string[]>(["panel1", "panel3"]);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? [...expanded, panel] : expanded.filter((p) => p !== panel));
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      {DATA.map((panel, index) => (
        <Accordion
          key={panel.id}
          expanded={expanded.includes(panel.id)}
          onChange={handleChange(panel.id)}
          sx={{
            backgroundColor: alpha(panel.color, 0.08),
            borderLeft: `4px solid ${panel.color}`
          }}>
          <AccordionSummary aria-controls={`${panel.id}-content`} id={`${panel.id}-header`}>
            {panel.icon}
            <Typography component="span" sx={{ ml: 1 }}>{`Accordion ${index + 1}`}</Typography>
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

const DATA = [
  { id: "panel1", color: "#00e600", icon: <AppsIcon /> },
  { id: "panel2", color: "#6666ff", icon: <ApiIcon /> },
  { id: "panel3", color: "#b82e8a", icon: <AccessAlarmIcon /> }
];

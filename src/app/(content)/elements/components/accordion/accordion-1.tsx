"use client";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Accordion = styled(MuiAccordion)(() => ({
  marginBottom: 8,
  borderRadius: "8px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  [`&.${accordionSummaryClasses.expanded}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: "0px 0px",
    minHeight: "44px",
    [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
      color: "white",
    },
  },
  [`& .${accordionSummaryClasses.content}.${accordionSummaryClasses.expanded}`]:
    {
      margin: "0px",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.70)",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
}));

const accordionData = [
  {
    id: 1,
    title: "Item 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 2,
    title: "Item 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 3,
    title: "Item 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 4,
    title: "Item 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export default function AccordionExample() {
  const [expanded, setExpanded] = React.useState<number | false>(1);

  const handleChange =
    (panel: number) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      {accordionData.map((accordionItem) => (
        <Accordion
          key={accordionItem.id}
          expanded={expanded === accordionItem.id}
          onChange={handleChange(accordionItem.id)}
        >
          <AccordionSummary
            expandIcon={
              expanded === accordionItem.id ? <RemoveIcon /> : <AddIcon />
            }
            aria-controls={`${accordionItem.id}-content`}
            id={`${accordionItem.id}-header`}
          >
            <Typography component="span">{accordionItem.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{accordionItem.content}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

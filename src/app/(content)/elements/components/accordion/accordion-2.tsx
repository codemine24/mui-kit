"use client";

import * as React from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Accordion = styled(MuiAccordion)(() => ({
  boxShadow: "none",
  margin: 0,
  "&.Mui-expanded": {
    margin: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderBottom: "2px solid",
  borderColor: theme.palette.divider,
  "& .MuiAccordionSummary-expandIconWrapper": {
    border: "2px solid",
    borderColor: theme.palette.divider,
    borderRadius: "50%",
  },
  "&.Mui-expanded": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    minHeight: "44px",
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: theme.palette.primary.main,
      border: "2px solid",
      borderColor: theme.palette.primary.main,
      borderRadius: "50%",
    },
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "0px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderBottom: "1px solid",
  borderColor: theme.palette.divider,
  padding: "16px",
}));

export default function AccordionExample() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      {["panel1", "panel2", "panel3"].map((panelId, index) => (
        <Accordion
          key={panelId}
          expanded={expanded === panelId}
          onChange={handleChange(panelId)}
        >
          <AccordionSummary
            expandIcon={expanded === panelId ? <RemoveIcon /> : <AddIcon />}
            aria-controls={`${panelId}-content`}
            id={`${panelId}-header`}
          >
            <Typography component="span">{`Accordion ${index + 1}`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export const Accordion1CodeString = `
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
  marginBottom: 8,
  borderRadius: "8px",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  "&.Mui-expanded": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: "0px 0px",
    minHeight: "44px",
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "white",
    },
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "0px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  backgroundColor: "#fff",
  color: "rgba(0, 0, 0, 0.70)",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
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
            aria-controls={\`\${panelId}-content\`}
            id={\`\${panelId}-header\`}
          >
            <Typography component="span">{\`\Accordion \${index + 1}\`}</Typography>
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
`;

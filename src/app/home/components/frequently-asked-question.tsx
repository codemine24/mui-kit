"use client";
import { BodyText } from "@/components/core/body-text";
import { Heading2 } from "@/components/core/heading-2";
import { Add, Remove } from "@mui/icons-material";
import {
  AccordionDetails,
  Box,
  Container,
  Link,
  Accordion as MuiAccordion,
  AccordionSummary,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const leftQuestions = [
  {
    id: "panel1",
    title: "Do I need to install MUI separately?",
    description:
      "Yes, you need to install @mui/material and its peer dependencies like @emotion/react and @emotion/styled to use the components.",
  },
  {
    id: "panel2",
    title: "Is this library compatible with MUI v5?",
    description:
      "Yes, this component library is built on top of MUI v5 and fully supports its theming and styling system.",
  },
  {
    id: "panel3",
    title: "Can I customize the components?",
    description:
      "Absolutely! All components support props and theming overrides to allow for extensive customization.",
  },
];

const rightQuestions = [
  {
    id: "panel4",
    title: "How do I contribute to this library?",
    description:
      "You can contribute by opening issues, submitting pull requests, or suggesting new components on our GitHub repository.",
  },
  {
    id: "panel5",
    title: "Does it support dark mode?",
    description:
      "Yes, the library is built with MUI’s theming capabilities, including support for both light and dark modes.",
  },
  {
    id: "panel6",
    title: "Is there TypeScript support?",
    description:
      "Yes, all components are written in TypeScript and come with full typing support out of the box.",
  },
];

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  boxShadow: "1px 1px 2px 0.9px rgba(0, 0, 0, 0.07)",
  overflow: "hidden",
  borderRadius: 5,
  minHeight: "55px",

  "&:before": {
    display: "none",
  },

  "&:first-of-type": {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  "&:last-of-type": {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  "& + .MuiAccordion-root": {
    marginTop: theme.spacing(1),
  },

  "&.Mui-expanded": {
    marginBottom: 10,
    marginTop: 10,
  },
}));

export const FrequentlyAskedQuestion = () => {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth={"xl"}>
        <Box mb={4}>
          <Heading2
            text="Frequently Asked Questions"
            sx={{ textAlign: "center" }}
          />
          <BodyText
            text={
              <>
                Frequently asked questions about MUI KIT. If you have more
                questions, don&apos;t hesitate to contact us at
                <Link
                  href="mailto:codemine24@gmail.com"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    textDecoration: "none",
                    color: "primary.main",
                    mx: 0.5,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  codemine24@gmail.com
                </Link>
              </>
            }
            sx={{
              textAlign: "center",
              px: { xs: "0%", md: "25%" },
            }}
          />
        </Box>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Box>
            {leftQuestions.map((panel) => (
              <Accordion
                key={panel.id}
                expanded={expanded === panel.id}
                onChange={handleChange(panel.id)}
              >
                <AccordionSummary
                  expandIcon={expanded === panel.id ? <Remove /> : <Add />}
                  aria-controls={`${panel.id}-content`}
                  id={`${panel.id}-header`}
                >
                  <Typography component="span">{panel.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{panel.description}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Box>
            {rightQuestions.map((panel) => (
              <Accordion
                key={panel.id}
                expanded={expanded === panel.id}
                onChange={handleChange(panel.id)}
              >
                <AccordionSummary
                  expandIcon={expanded === panel.id ? <Remove /> : <Add />}
                  aria-controls={`${panel.id}-content`}
                  id={`${panel.id}-header`}
                >
                  <Typography component="span">{panel.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{panel.description}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

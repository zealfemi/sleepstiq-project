import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import data from "../data/faqs";

export default function FAQsAccordion(props) {
  const catId = props.categoryId;

  const [expanded, setExpanded] = useState(false);

  function handleChange(isExpanded, panel) {
    setExpanded(isExpanded ? panel : false);
  }

  const accordion = data[catId].data?.map((accordionList) => {
    return (
      <Accordion
        expanded={expanded === accordionList.id}
        onChange={(event, isExpanded) =>
          handleChange(isExpanded, accordionList.id)
        }
      >
        <AccordionSummary
          id={accordionList.id}
          aria-controls={accordionList.id}
        >
          {accordionList.question}
        </AccordionSummary>
        <AccordionDetails>{accordionList.answer}</AccordionDetails>
      </Accordion>
    );
  });

  return <>{accordion}</>;
}

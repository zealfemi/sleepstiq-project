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

  const accordion = data[catId].data.map((accordionList) => {
    return (
      <Accordion
        id="panel1-header"
        aria-controls="panel1-content"
        key={accordionList.id}
      >
        <AccordionSummary>{accordionList.question}</AccordionSummary>
        <AccordionDetails>{accordionList.answer}</AccordionDetails>
      </Accordion>
    );
  });

  return <>{accordion}</>;
}

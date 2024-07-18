import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function FAQsAccordion() {
  return (
    <>
      <Accordion id="panel-header" aria-controls="panel-content">
        <AccordionSummary>HEADER</AccordionSummary>
        <AccordionDetails>ANSWER</AccordionDetails>
      </Accordion>
    </>
  );
}

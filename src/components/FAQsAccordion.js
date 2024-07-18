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

  const accordion = data[catId].map((accordionList) => {
    return (
      <Accordion id="panel1-header" aria-controls="panel1-content">
        <AccordionSummary>{accordionList.question}</AccordionSummary>
        <AccordionDetails>{accordionList.answer}</AccordionDetails>
      </Accordion>
    );
  });

  return (
    <>
      {accordion}
      {/* <Accordion id="panel1-header" aria-controls="panel1-content">
        <AccordionSummary>HEADER</AccordionSummary>
        <AccordionDetails>ANSWER</AccordionDetails>
      </Accordion>
      <Accordion id="panel2-header" aria-controls="panel2-content">
        <AccordionSummary>HEADER</AccordionSummary>
        <AccordionDetails>ANSWER</AccordionDetails>
      </Accordion>
      <Accordion id="panel-header" aria-controls="panel-content">
        <AccordionSummary>HEADER</AccordionSummary>
        <AccordionDetails>ANSWER</AccordionDetails>
      </Accordion> */}
    </>
  );
}

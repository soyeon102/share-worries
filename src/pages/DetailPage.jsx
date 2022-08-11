import Layout from "../components/layout/Layout";
import WorryDetail from "../components/WorryDetail";
import WorryCommentList from "../components/WorryCommentList";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { useEffect, useState } from "react";

const DetailPage = () => {
  return (
    <Layout>
      <WorryDetail />

      <MyAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <StCommentToggle>눌러서 댓글 보기</StCommentToggle>
        </AccordionSummary>
        <AccordionDetails>
          <WorryCommentList />
        </AccordionDetails>
      </MyAccordion>
    </Layout>
  );
};

export default DetailPage;

const StCommentToggle = styled.div`
  width: 100%;
  text-align: center;
`;

const MyAccordion = styled(Accordion)(() => ({
  border: "1px solid black",
  borderRadius: "6px !important",
  boxShadow: "none !important",
}));

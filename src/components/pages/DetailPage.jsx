import Layout from "../layout/Layout";
import WorryDetail from "../WorryDetail";
import WorryComment from "../WorryComment";
import { useEffect, useState } from "react";

const DetailPage = () => {
  return (
    <Layout>
      <WorryDetail />
      <WorryComment />
    </Layout>
  );
};

export default DetailPage;

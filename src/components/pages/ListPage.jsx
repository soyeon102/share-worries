import Layout from "../layout/Layout";
import styled from "styled-components";
import WorryList from "../WorryList";

const ListPage = () => {
  return (
    <Layout>
      <StListtitle>고민 리스트</StListtitle>
      <WorryList />
    </Layout>
  );
};

export default ListPage;

const StListtitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
`;

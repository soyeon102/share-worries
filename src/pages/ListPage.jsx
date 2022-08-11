import Layout from "../components/layout/Layout";
import WorryList from "../components/WorryList";
import CommonButton from "../components/elements/CommonButton";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StTitleWrap>
        <StListtitle>고민 리스트</StListtitle>
        <CommonButton
          edit
          iconColor="primary"
          size="large"
          onClick={() => navigate("/writing")}
        />
      </StTitleWrap>
      <WorryList />
    </Layout>
  );
};

export default ListPage;

const StListtitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const StTitleWrap = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

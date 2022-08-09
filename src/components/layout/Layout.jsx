import Container from "@mui/material/Container";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <StPagePadding>
        <Header />
        {children}
      </StPagePadding>
    </Container>
  );
};

export default Layout;

const StPagePadding = styled.div`
  padding-bottom: 60px;
`;

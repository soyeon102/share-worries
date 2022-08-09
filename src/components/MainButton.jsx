import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainButton = ({ writePage, listPage, text }) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    if (writePage) navigate("/writing");
    if (listPage) navigate("/list");
  };

  return (
    <StContainer onClick={handleRoute}>
      <StRouteButton>
        {writePage && (
          <StInner>
            <HistoryEduIcon sx={{ fontSize: 50 }} />
            <StTitle>{text}</StTitle>
          </StInner>
        )}
        {listPage && (
          <StInner>
            <SpeakerNotesIcon sx={{ fontSize: 50 }} />
            <StTitle>{text}</StTitle>
          </StInner>
        )}
        <ArrowForwardIosIcon />
      </StRouteButton>
    </StContainer>
  );
};

export default MainButton;

const StContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px 40px;
  margin-top: 30px;
  cursor: pointer;
`;

const StRouteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StTitle = styled.h2`
  margin-left: 20px;
  font-size: 22px;
`;

const StInner = styled.div`
  display: flex;
  align-items: center;
`;

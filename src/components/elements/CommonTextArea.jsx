import { borderColor } from "@mui/system";
import styled from "styled-components";

const CommonTextArea = ({ labeltext, text, value, id, onChange, error }) => {
  return (
    <StBox>
      <Stlabel htmlfor={id}>{labeltext}</Stlabel>
      <StTextArea
        placeholder={text}
        id={id}
        onChange={onChange}
        value={value}
        error={error}
      />
    </StBox>
  );
};

export default CommonTextArea;

const StTextArea = styled("textarea")(({ error }) => ({
  width: "100%",
  height: "250px",
  marginTop: "15px",
  padding: "20px",
  boxSizing: "border-box",
  border: "1px solid",
  borderColor: error || "black",
  borderRadius: "6px",
  outlineColor: "#1976d2",
  "&:hover": {
    border: "2px solid black",
  },
  "::placeholder": {
    color: "#b3acac",
  },
}));

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`;
const Stlabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

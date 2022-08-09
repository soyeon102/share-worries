import styled from "styled-components";

const CommonTextArea = ({ labeltext, text, id, onChange }) => {
  return (
    <StBox>
      <Stlabel htmlfor={id}>{labeltext}</Stlabel>
      <StTextArea placeholder={text} id={id} onChange={onChange} />
    </StBox>
  );
};

export default CommonTextArea;

const StTextArea = styled.textarea`
  width: 100%;
  height: 250px;
  margin-top: 15px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 6px;
  outline-color: #1976d2;

  &:hover {
    border: 2px solid black;
  }

  ::placeholder {
    color: #b3acac;
  }
`;

const StBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`;
const Stlabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

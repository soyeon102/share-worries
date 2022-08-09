import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { __deleteWorry, __getWorries } from "../redux/modules/worrySlice";
import { useEffect } from "react";

const WorryCard = ({ id, user, title, date, onClick }) => {
  const dispatch = useDispatch();
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();

  return (
    <StContainer onClick={onClick}>
      <StCard>
        <StListtitle>{title}</StListtitle>
        <StListWriter>작성자: {user}</StListWriter>
        <StListDate>{`${year}년 ${month + 1}월 ${day}일`}</StListDate>
      </StCard>

      <IconButton
        color="primary"
        del="true"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(__deleteWorry(id));
        }}
      >
        <DeleteIcon />
      </IconButton>
    </StContainer>
  );
};

export default WorryCard;

const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px 30px;

  & + & {
    margin-top: 20px;
  }
`;

const StCard = styled.div``;

const StListtitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const StListWriter = styled.div`
  /* font-size: 10px;
  margin-top: 10px; */
`;

const StListDate = styled.div`
  margin-top: 6px;
  color: #999;
`;

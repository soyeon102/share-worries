import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonButton from "./elements/CommonButton";
import styled from "styled-components";
import { __getWorries, __editWorry } from "../redux/modules/worrySlice";

const WorryDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const { worries, isLoading, error } = useSelector((state) => state.worries);
  const worry = worries.find((item) => item.id === Number(id));

  let getDate;

  if (worry) {
    getDate = {
      year: new Date(worry.date).getFullYear(),
      month: new Date(worry.date).getMonth() + 1,
      day: new Date(worry.date).getDate(),
    };
  }

  const [editWorry, setEditWorry] = useState(worry ? worry.content : "");

  useEffect(() => {
    dispatch(__getWorries());
  }, [dispatch]);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleEditOk = () => {
    dispatch(__editWorry({ id: worry.id, content: editWorry }));
    setIsEdit(false);
  };

  return (
    worry && (
      <>
        <StWrap>
          <span> Id : {id} </span>
          <div>
            <CommonButton
              text="이전으로"
              margin="0 10px 0 0"
              onClick={() => {
                navigate(-1);
              }}
            />
            <CommonButton
              text={isEdit ? "수정 완료" : "수정하기"}
              onClick={() => {
                isEdit ? handleEditOk() : handleEdit();
              }}
            />
          </div>
        </StWrap>
        <StWrap>
          <StTitle>{worry.title}</StTitle>
          <StDate>{`${getDate.year}년 ${getDate.month}월 ${getDate.day}일`}</StDate>
        </StWrap>
        <StUser>작성자: {worry.user}</StUser>
        {isEdit ? (
          <StTextArea
            value={editWorry}
            onChange={(e) => {
              setEditWorry(e.target.value);
            }}
          />
        ) : (
          <StContent>{worry.content}</StContent>
        )}
      </>
    )
  );
};

export default WorryDetail;

const StWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px auto 0;
`;

const StTitle = styled.div`
  font-size: 22px;
`;

const StUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #777;
`;

const StContent = styled.div`
  height: 250px;
  margin: 20px auto;
  border: 1px solid black;
  padding: 20px;
  border-radius: 6px;
`;

const StTextArea = styled.textarea`
  width: 100%;
  height: 290px;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  border: 1px solid black;

  border-radius: 6px;
`;

const StDate = styled.div`
  color: #777;
`;

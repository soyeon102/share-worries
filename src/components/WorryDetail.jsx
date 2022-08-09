import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CommonButon from "./elements/CommonButton";
import styled from "styled-components";
import { __getWorries, __editWorry } from "../redux/modules/worrySlice";

const WorryDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  // const worries = useSelector((state) => state.worries.worries);
  const { worries, isLoading, error } = useSelector((state) => state.worries);
  const worry = worries.find((item) => item.id === Number(id));

  const [editWorry, setEditWorry] = useState(worry.content);

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

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <StWrap>
        <span> Id : {id} </span>
        <div>
          <CommonButon
            text="이전으로"
            margin="0 10px 0 0"
            onClick={() => {
              navigate(-1);
            }}
          />
          <CommonButon
            text={isEdit ? "수정 완료" : "수정하기"}
            onClick={() => {
              isEdit ? handleEditOk() : handleEdit();
            }}
          />
        </div>
      </StWrap>
      <StWrap>
        <StTitle>{worry.title}</StTitle>
        <StUser>작성자: {worry.user}</StUser>
      </StWrap>
      {isEdit ? (
        <textarea
          value={editWorry}
          onChange={(e) => {
            setEditWorry(e.target.value);
          }}
        />
      ) : (
        <StContent>{worry.content}</StContent>
      )}
    </>
  );
};

export default WorryDetail;

const StWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px auto;
`;

const StTitle = styled.div`
  font-size: 22px;
`;

const StUser = styled.div`
  color: #777;
`;

const StContent = styled.div`
  height: 250px;
  margin: 20px auto;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
`;

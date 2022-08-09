import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WorryCard from "./WorryCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getWorries } from "../redux/modules/worrySlice";

const WorryList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const worries = useSelector((state) => state.worries.worries);

  useEffect(() => {
    dispatch(__getWorries());
  }, [dispatch]);

  return (
    <>
      {worries.length === 0 ? (
        <StEmpty>아직 고민이 없어요! 😃</StEmpty>
      ) : (
        <StWorryList>
          {worries.map((worry) => (
            <WorryCard
              key={worry.id}
              id={worry.id}
              user={worry.user}
              title={worry.title}
              content={worry.content}
              date={worry.date}
              onClick={() => {
                navigate(`/detail/${worry.id}`);
              }}
            />
          ))}
        </StWorryList>
      )}
    </>
  );
};

export default WorryList;

const StWorryList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`;

const StEmpty = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #777;
`;

import CommonInput from "./elements/CommonInput";
import CommonButton from "./elements/CommonButton";
import CommonTextArea from "./elements/CommonTextArea";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getWorries, __addWorry } from "../redux/modules/worrySlice";
import { useNavigate } from "react-router-dom";

const WorryAddition = () => {
  const dispatch = useDispatch();
  const navitate = useNavigate();
  const { worries, isLoading, error } = useSelector((state) => state.worries);

  const [worry, setWorry] = useState({
    user: "",
    title: "",
    content: "",
    date: Date.now(),
  });

  // worries 데이터 가져오기
  useEffect(() => {
    dispatch(__getWorries());
  }, [dispatch]);

  // 추가 버튼 클릭
  const handleAddWorry = (worry) => {
    dispatch(__addWorry(worry));
    navitate("/list");
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setWorry({ ...worry, [e.target.id]: e.target.value });
  };

  // console.log(worries);
  // console.log(worry);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <CommonInput
          text="이름을 입력해주세요."
          id="user"
          labeltext="작성자"
          // inputValue={worry.user}
          onChange={handleInputChange}
        />

        <CommonInput
          text="제목을 입력해주세요."
          id="title"
          labeltext="제목"
          // inputValue={worry.title}
          onChange={handleInputChange}
        />

        <CommonTextArea
          text="내용을 입력해주세요."
          id="content"
          labeltext="내용"
          // inputValue={worry.content}
          onChange={handleInputChange}
        />

        <StButtonContainer>
          <CommonButton
            text="추가하기"
            size="140px"
            margin="30px 0 0 0"
            onClick={() => handleAddWorry(worry)}
          />
        </StButtonContainer>
      </form>
    </div>
  );
};

export default WorryAddition;

const StButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

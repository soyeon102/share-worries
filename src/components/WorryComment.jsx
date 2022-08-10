import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CommonButton from "./elements/CommonButton";
import { __deleteComment } from "../redux/modules/worrySlice";

const WorryComment = ({ filterComment }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = (id) => {
    setIsEdit(!isEdit);
    console.log(id);
  };

  const { commentUser, comment, id } = filterComment || {};

  const handleCommentChange = () => {};

  console.log(filterComment);

  return (
    <>
      {isEdit ? (
        <StCommentBox>
          <StUser>{commentUser}</StUser>
          <StItem>
            <StEditInput defaultValue={comment} />

            <StButtonGroup>
              <CommonButton
                edit="true"
                iconColor="primary"
                onClick={() => {
                  handleEdit(id);
                }}
              />
              <CommonButton
                del="true"
                iconColor="primary"
                onClick={() => {
                  dispatch(__deleteComment(id));
                }}
              />
            </StButtonGroup>
          </StItem>
        </StCommentBox>
      ) : (
        <StCommentBox>
          <StUser>{commentUser}</StUser>
          <StItem>
            <StComment>{comment}</StComment>
            <StButtonGroup>
              <CommonButton
                edit="true"
                iconColor="primary"
                onClick={() => {
                  handleEdit(id);
                }}
              />
              <CommonButton
                del="true"
                iconColor="primary"
                onClick={() => {
                  dispatch(__deleteComment(id));
                }}
              />
            </StButtonGroup>
          </StItem>
        </StCommentBox>
      )}
    </>
  );
};

export default WorryComment;

const StCommentBox = styled.div`
  border-bottom: 1px solid black;

  & + & {
    margin-top: 14px;
  }
`;

const StItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const StUser = styled.div`
  color: #777;
  font-size: 14px;
`;
const StComment = styled.div`
  font-size: 18px;
`;

const StButtonGroup = styled.div``;

const StEditInput = styled.input`
  padding: 10px;
  width: 54vw;
  border: 1px solid #dfdfdf;
  outline: none;
`;

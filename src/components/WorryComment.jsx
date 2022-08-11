import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CommonButton from "./elements/CommonButton";
import { __deleteComment, __editComment } from "../redux/modules/worrySlice";

const WorryComment = ({ filterComment }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { commentUser, comment, id } = filterComment || {};
  const [editComment, setEditComment] = useState(comment ? comment : "");

  const handleEdit = (id) => {
    setIsEdit(true);
  };

  const handleEditOk = () => {
    if (editComment === "") {
      alert("댓글을 입력해주세요");
    } else {
      setIsEdit(false);
      dispatch(__editComment({ id: id, comment: editComment }));
    }
  };

  const handleCommentChange = (e) => {
    setEditComment(e.target.value);
  };

  return (
    <>
      {isEdit ? (
        <StCommentBox>
          <StUser>{commentUser}</StUser>
          <StItem>
            <StEditInput
              defaultValue={comment}
              onChange={handleCommentChange}
            />

            <StButtonGroup>
              <CommonButton
                edit="true"
                iconColor="primary"
                onClick={() => {
                  handleEditOk();
                }}
              />
              <CommonButton
                del="true"
                disabled
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
  padding: 0 0 10px;
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

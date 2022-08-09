import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import CommonButton from "./elements/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  __addComment,
  __getWorryComments,
  __deleteComment,
} from "../redux/modules/worrySlice";

export default function BasicStack() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const worryComments = useSelector((state) => state.worries.comments);
  const worryComment = worryComments.filter(
    (item) => item.worryId === Number(id)
  );

  const [comments, setComment] = useState({
    worryId: Number(id),
    comment: "",
    commentUser: "",
  });

  const handleInputChange = (e) => {
    setComment({ ...comments, [e.target.id]: e.target.value });
  };

  const handleAddComment = (newComment) => {
    dispatch(__addComment(comments));
    setComment({ ...comments, commentUser: "", comment: "" });
  };

  useEffect(() => {
    dispatch(__getWorryComments());
  }, [dispatch]);

  console.log(worryComment);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={3}>
          <StCommentAdd>
            <StText>댓글남기기</StText>

            <StUserInput
              type="text"
              id="commentUser"
              maxLength="5"
              placeholder="작성자"
              value={comments.commentUser}
              onChange={handleInputChange}
            />
            <StCommentInput
              type="text"
              id="comment"
              placeholder="댓글을 남겨주세요"
              value={comments.comment}
              onChange={handleInputChange}
            />
            <CommonButton
              add
              onClick={() => {
                handleAddComment(comments);
              }}
            />
          </StCommentAdd>
          <div>
            <StCommentList>
              {worryComment?.map((item) => (
                <StCommentBox key={item.id}>
                  <StItem>
                    <StUser>{item.commentUser}</StUser>
                    <StComment>{item.comment}</StComment>
                  </StItem>
                  <StButtonGroup>
                    <CommonButton edit="true" />
                    <CommonButton
                      del="true"
                      onClick={() => {
                        dispatch(__deleteComment(item.id));
                      }}
                    />
                  </StButtonGroup>
                </StCommentBox>
              ))}
            </StCommentList>
          </div>
        </Stack>
      </Box>
    </>
  );
}

// export default WorryComment;

const StCommentAdd = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const StText = styled.div`
  font-weight: bold;
  width: 130px;
`;

const StUserInput = styled.input`
  width: 18%;
  height: 40px;
  margin-right: 2%;
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

const StCommentInput = styled.input`
  width: 80%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

const StCommentList = styled.div`
  width: 100%;
`;

const StCommentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

  & + & {
    margin-top: 14px;
  }
`;

const StItem = styled.div`
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

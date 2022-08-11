import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import CommonButton from "./elements/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment, __getWorryComments } from "../redux/modules/worrySlice";
import WorryComment from "./WorryComment";

const WorryCommentList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const worryComments = useSelector((state) => state.worries.comments);
  const worryComment = worryComments.filter(
    (item) => item.worryId === Number(id)
  );

  const [comments, setComments] = useState({
    worryId: Number(id),
    comment: "",
    commentUser: "",
  });

  const handleInputChange = (e) => {
    setComments({ ...comments, [e.target.id]: e.target.value });
  };

  const handleAddComment = (newComment) => {
    if (comments.commentUser.trim() === "" || comments.comment.trim() === "") {
      alert("댓글을 작성해주세요.");
      return;
    } else {
      dispatch(__addComment(newComment));
      setComments({ ...comments, commentUser: "", comment: "" });
    }
  };

  useEffect(() => {
    dispatch(__getWorryComments());
  }, [dispatch]);

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
              placeholder="작성자 (5자 이내)"
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
          <StCommentList>
            {worryComment?.map((item) => (
              <WorryComment key={item.id} filterComment={item} />
            ))}
          </StCommentList>
        </Stack>
      </Box>
    </>
  );
};

export default WorryCommentList;

const StCommentAdd = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 30px;
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
  border-radius: 2px;
`;

const StCommentInput = styled.input`
  width: 80%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 2px;
`;

const StCommentList = styled.div`
  width: 100%;
`;

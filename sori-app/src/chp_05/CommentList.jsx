import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "정소리",
        comment:"안녕하세요! 반갑습니다:)"
    },
    {
        name: "김민수",
        comment:"처음 가입했어요~ 안녕하세요"
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comm) => { //map함수로 각 댓글객체에 대해서 Comment컴포넌트를 리턴하도록 만든다.
                return (
                    <Comment name={comm.name} comment={comm.comment} />
                );
            })}
            
        </div>
    );
}

export default CommentList;
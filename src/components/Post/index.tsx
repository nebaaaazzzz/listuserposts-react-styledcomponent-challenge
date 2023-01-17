import React from "react";
import styled from "styled-components";
const PostC = styled.div`
  padding: 10px;
  margin: 30px 0;
  border: 1px solid gray;
  border-radius: 10px;
`;
const ProfilePic = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: blue;
  &:hover {
    border: 1px solid red;
  }
`;
const Title = styled.h3``;
const UserBioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Link = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
`;
function Post({
  title,
  userId,
  body,
}: {
  title: string;
  userId: string;
  body: string;
}) {
  return (
    <PostC>
      <UserBioContainer>
        <ProfilePic />
        <Link href="#">@{userId}</Link>
      </UserBioContainer>
      <div style={{ marginLeft: 50 }}>
        <Title>{title}</Title>
        <>{body}</>
      </div>
    </PostC>
  );
}

export default Post;

import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./components/Post";
const AppC = styled.div``;
const HeaderC = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  z-index: 99;
  background-color: blue;
`;
const FooterC = styled.div``;
const MainC = styled.div`
  display: flex;
  position: relative;
  top: 100px;
`;
const PostContainer = styled.div`
  flex: 3;
`;

const LeftSideContainer = styled.div`
  flex: 1;
`;
const RightSideContainer = styled.div`
  flex: 1;
`;

interface PostI {
  userId: string;
  id: string;
  title: string;
  body: string;
}
function App() {
  const [posts, setPosts] = useState<Array<PostI>>([]);
  useEffect(() => {
    async function loadData() {
      const loaded = await (
        await axios.get("https://jsonplaceholder.typicode.com/posts")
      ).data;
      setPosts(loaded);
    }
    loadData();
  }, []);

  return (
    <AppC>
      <HeaderC>HEADER</HeaderC>
      <MainC>
        <LeftSideContainer>
          <p>LeftSide bar</p>
        </LeftSideContainer>
        <PostContainer>
          {posts.map((post) => {
            return <Post {...post} />;
          })}
        </PostContainer>
        <RightSideContainer>
          <p>RIGHT SIDE BAR</p>
        </RightSideContainer>
      </MainC>
      <FooterC></FooterC>
    </AppC>
  );
}

export default App;

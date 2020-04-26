import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hackerNewsApi";
import { useInfiniteScroll } from "./useInfiniteScroll";
import Story from "./story";
import { Wrapper, ListWrapper, Title } from "../styles/storyStyles";

function Stories() {
  const [storyIds, setStoryIds] = useState([]);
  const { count } = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <Title>
        <h1>Hacker News Stories</h1>
      </Title>
      <ListWrapper>
        {storyIds.slice(0, count).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </ListWrapper>
    </Wrapper>
  );
}

export default Stories;

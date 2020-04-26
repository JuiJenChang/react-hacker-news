import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsApi";
import { Item, StoryLink, ItemTitle, Description } from "../styles/storyStyles";
import { mapTime } from "../mapTime/mapTime";

function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <Item>
      <StoryLink href={story.url} target="_blank">
        <ItemTitle>{story.title}</ItemTitle>
      </StoryLink>
      <Description>
        <span>By: {story.by}</span>
        <span>posted: {mapTime(story.time)}</span>
      </Description>
    </Item>
  ) : null;
}

export default Story;

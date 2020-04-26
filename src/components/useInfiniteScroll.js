import { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

export const useInfiniteScroll = () => {
  const MAX_STORIES = 500;
  const STORY_INCREMENT = 20;
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = debounce(() => {
    const scrollToBottom = Math.floor(
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop)
    );
    if (scrollToBottom > 5 || loading) return false;

    setLoading(true);
  }, 300);

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    handleScroll();
  },[]);

  return { count };
};

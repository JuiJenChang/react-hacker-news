import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.header`
  color: #848886;
  background-color: #272727;
  margin: 0;
  padding-left: 24px;
`;

export const ListWrapper = styled.ul`
  background-color: #393c3e;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  border-bottom: 1px solid #272727;
  padding: 14px 24px;
  &:last-child {
    border-bottom: none;
  }
`;

export const StoryLink = styled.a`
  color: #bfbebe;
`;

export const ItemTitle = styled.h3`
  color: #bfbebe;
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #848886;
  display: flex;
  justify-content: space-between;
`;
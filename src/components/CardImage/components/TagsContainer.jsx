import React from "react";
import { styled } from "@mui/material/styles";
import appColor from "../../../setting/appColor";

const TagsContainerRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.3em",
}));

const StyledTag = styled("div")(({ theme }) => ({
  padding: "0.1em 1em",
  borderRadius: "10px",
  backgroundColor: appColor.backgroundPrimary,
  color: 'white'
}));

const TagsContainer = ({ tagArray }) => {
  // console.log('TAG ARRAY',tagArray);
  const renderTags = () => {
    if (tagArray.length === 0 || tagArray[0]==='') {
      return null;
    }
    return tagArray.map((tag, index) => (
      <StyledTag key={index}>{tag}</StyledTag>
    ));
  };

  return <TagsContainerRoot data-testid="tags-container">{renderTags()}</TagsContainerRoot>;
};

export default TagsContainer;

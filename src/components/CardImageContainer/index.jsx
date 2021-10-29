import React from "react";
import CardImage from "../CardImage";
// import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
// import Masonry from "react-masonry-css";
// import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/system";
// import "./masonry.css";

// const StyledImageContainer = styled("div")(({ theme }) => ({}));

// const StyledMasonry = styled((props) => <Masonry>{props.children}</Masonry>)(
//   ({theme}) => ({
//     "& .my-masonry-grid": {
//       // display: "-webkit-box", /* Not needed if autoprefixing */
//       // display: "-ms-flexbox", /* Not needed if autoprefixing */
//       display: "flex",
//       marginLeft: "-30px", /* gutter size offset */
//       width: "auto",
//     },
//     "& .my-masonry-grid_column": {
//       paddingLeft: "30px", /* gutter size */
//       backgroundClip: "padding-box",
//     },

//     /* Style your items */
//     "& .my-masonry-grid_column > div": { /* change div to reference your elements you put in <Masonry> */
//       background: "grey",
//       marginBottom: "30px",
//     },
//   })
// )

const CardImageContainer = ({ imageData, page, pageSize, loading }) => {
  // console.log('INI IMAGE DATA', imageData, page, pageSize)

  const renderImageCard = () => {
    if(loading) return <Typography>Loading...</Typography>
    if (!imageData || imageData.length === 0)
      return <Typography>Data not found</Typography>;
    const imagesToRender = imageData.slice(
      pageSize * (page - 1),
      pageSize * page
    );
    // console.log('image to render', dataToRender);
    return imagesToRender.map((image, index) => (
      <CardImage key={index} imageDetails={image} />
    ));
  };

  return (
    // <Masonry
    //   breakpointCols={5}
    //   className="my-masonry-grid"
    //   columnClassName="my-masonry-grid_column"
    // >
    <Box data-testid="card-image-container" width="100%" display="flex" gap="16px" flexWrap="wrap" padding='1em' justifyContent="center" alignItems="start">{renderImageCard()}</Box>
    // </Masonry>
  );
};

export default CardImageContainer;

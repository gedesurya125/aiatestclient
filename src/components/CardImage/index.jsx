import React, { useState, useEffect } from "react";
// import { StyledCardImage } from './styledCardImage'
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { findAuthor } from "../../tools/findAuthor";
import { formatDate } from "../../tools/dateReformat";
import { Button } from "@mui/material";
import TagsContainer from "./components/TagsContainer";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

const ExpandMoreIconAnimated = styled((props) => {
  const { expand, ...other } = props;
  return <ExpandMoreIcon {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DescriptionContainer = styled("div")(({ theme }) => ({
  "& p:first-of-type":{
    textAlign: 'center',
    fontWeight: 'bold'
  },
  "& p:first-of-type > a":{
    textDecoration: 'none'
  },
  "& p > a > img": {
    // textAlign: 'center',
    width: "100%",
    height: "auto",
  },
}));

const CardImage = ({ imageDetails }) => {
  // console.log('INI IMAGE DETAILSNYA', imageDetails)
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const author = findAuthor(imageDetails.author);
  // console.log('ini authornya', author);


  useEffect(() => {
    return () => {
      setExpanded(false);
    }
  },[imageDetails])
  return (
    <Card sx={{ 
      width: {
        xs: '90%',
        sm: '43%',
        md: '23%'
      }
     }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {author[0].toUpperCase()}
          </Avatar>
        }
        
        title={<Typography fontWeight="bold">{author}</Typography>}
        subheader={formatDate(imageDetails.date_taken)}
      />
      <CardMedia
        component="img"
        height="194"
        src={imageDetails.media.m}
        alt="Paella dish"
      />
      <CardContent>
        <Typography align="center">{imageDetails.title}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          size="small"
          fullWidth
          color="primary"
          onClick={handleExpandClick}
          endIcon={

              <ExpandMoreIconAnimated
                expand={expanded}
                aria-expanded={expanded}
                aria-label="show more"
              />
          }
        >
          Show More
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <DescriptionContainer
            dangerouslySetInnerHTML={{ __html: imageDetails.description }}
          ></DescriptionContainer>
          <Typography marginTop="1em" align="center" fontWeight="bold" gutterBottom>Tags:</Typography>
          <TagsContainer tagArray={imageDetails.tags.split(' ')}/>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardImage;

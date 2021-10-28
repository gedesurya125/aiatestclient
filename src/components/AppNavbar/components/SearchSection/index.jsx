import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { getFlickrImagesByTagsAction } from "../../../../redux/actions/flickrImagesActions";

const SearchSectionContainer = styled("div")(({ theme }) => ({
  flex: "1",
}));

const SearchSection = () => {
  const [searchPattern, setSearchPattern] = useState("");
  const dispatch = useDispatch();

  const handleChangeSearchPattern = (e) => {
    // console.log("THIS IS THE SEARCH PATTERN", e.target.value);
    setSearchPattern(e.target.value);
  };

  const handleSearchByTags = () => {
    // console.log('INI SEARCH PATTERN', searchPattern);
    dispatch(getFlickrImagesByTagsAction(searchPattern))
  }
  return (
    <SearchSectionContainer sx={{
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1em',
      display: 'flex',
      
    }}>
      <TextField
        fullWidth
        value={searchPattern}
        onChange={handleChangeSearchPattern}
        placeholder="Search by tag name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#658DAE" }} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            paddingRight: 0,
            color: "inherit",
            '& fieldset': {
              borderColor: '#658DAE',
            },
            '&:hover fieldset': {
              borderColor: '#658DAE',
            },
            // '&.Mui-focused fieldset': {
            //   borderColor: 'yellow',
            // },
          },
        }}
      />
      <Button onClick={handleSearchByTags} variant="contained">Search</Button>
    </SearchSectionContainer>
  );
};

export default SearchSection;

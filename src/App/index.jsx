import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlickrImagesAction } from "../redux/actions/flickrImagesActions";
import AppNavbar from "../components/AppNavbar";
import CardImageContainer from "../components/CardImageContainer";
import { StyledApp, AppHeader, AppMain, AppFooter } from "./StyledApp";
import { Toolbar, Typography } from "@mui/material";
// import { BrowserRouter as router, Switch, Route } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const flickrImages = useSelector((state) => state.flickrImages);
  const imagePerPage = 4;

  // console.log('INI ISI IMAGESNYA', flickrImages);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const renderPaginationLinks = () => {
    if (flickrImages.loading) return <Typography>Loading...</Typography>;
    if (flickrImages.data.items?.length === 0 || !flickrImages.data.items)
      return <Typography>Data not found</Typography>;

    const pageTotals = Math.ceil(
      flickrImages.data.items.length / imagePerPage +
        (flickrImages.data.items.length % imagePerPage)
    );
    // console.log('TOTAL PAGES', pageTotals);

    return (
      <Pagination
        sx={{
          marginBottom: '40px',
          "& .MuiPagination-ul": {
            justifyContent: "center",
          },
        }}
        page={page}
        onChange={handlePageChange}
        count={pageTotals}
        variant="outlined"
        color="primary"
      />
    );
  };

  useEffect(() => {
    dispatch(getFlickrImagesAction());
  }, [dispatch]);

  return (
    <StyledApp>
      <AppHeader>
        <AppNavbar />
      </AppHeader>

      <AppMain>
        <Toolbar sx={{
          height: {
            xs: '130px',
            md: '100px'
          }
        }}/>
        <CardImageContainer
          imageData={flickrImages.data.items}
          page={page}
          pageSize={imagePerPage}
          loading={flickrImages.loading}
        />

        {renderPaginationLinks()}
      </AppMain>

      <AppFooter></AppFooter>
    </StyledApp>
  );
}

export default App;

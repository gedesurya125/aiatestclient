import React from "react";
// import { StyledAppNavbar } from "./styledAppNavbar";
import HideOnScroll from "../commons/HideOnScroll";
import AppBar from "@mui/material/AppBar";
import LogoSection from "./components/LogoSection";
import SearchSection from "./components/SearchSection";
import appColor from "../../setting/appColor";

const AppNavbar = () => {
  return (
    <HideOnScroll>
      <AppBar
        sx={{
          backgroundColor: appColor.backgroundPrimary,
          flexDirection: {
            md: 'row'
          },
          alignItems: 'center',
          padding: '1em 1em',
          gap: '1em'
        }}
      >
          <LogoSection />
          <SearchSection />
      </AppBar>
    </HideOnScroll>
  );
};

export default AppNavbar;

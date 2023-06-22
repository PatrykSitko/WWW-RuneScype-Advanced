import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Menu from "../components/menu";
import LandingPage from "./path/landingPage";

const mapStateToProps = ({}) => ({
});

const mapDispatchToProps = () => ({
});

function Paths({  }) {
  return (
    <>
      {<Menu />}
      <Routes>
            <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Paths);

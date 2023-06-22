import React from "react";
import { connect } from "react-redux";

const mapStateToProps = ({ state }) => ({
  csrfToken: state.cookie.csrfToken,
  fingerprint: state.fingerprint,
  authenticationToken: state.cookie["authentication-token"],
});

const mapDispatchToProps = () => ({
});

function LandingPage({
}) {
  return (
    <>Hello World!</>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

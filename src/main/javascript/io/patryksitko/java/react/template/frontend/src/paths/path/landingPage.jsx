import React from "react";
import { connect } from "react-redux";
import { PyScriptProvider, PyScript } from "pyscript-react";

const mapStateToProps = ({ state }) => ({
  csrfToken: state.cookie.csrfToken,
  fingerprint: state.fingerprint,
  authenticationToken: state.cookie["authentication-token"],
});

const mapDispatchToProps = () => ({});

function LandingPage({}) {
  return (
    <PyScriptProvider>
      <PyScript>display("Hello world!")</PyScript>
    </PyScriptProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

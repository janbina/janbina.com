import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function NotFound() {
  return (
    <main>
      <Helmet>
        <title>Jan Bína - janbina.com</title>
      </Helmet>
      <h1>404</h1>
      <p>
        Nothing's here, go <a href="/">home</a>.
      </p>
    </main>
  );
}

export default NotFound;

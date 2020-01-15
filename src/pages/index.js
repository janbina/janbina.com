import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function Index() {
  return (
    <main>
      <Helmet>
        <title>Jan Bína - janbina.com</title>
      </Helmet>
      <h1>Jan Bína</h1>
      <p>
        I&apos;m an <strong>Android developer</strong> based in the Czech Republic
      </p>
      <p>
        <a href="mailto:mail@janbina.com">mail@janbina.com</a>
        <br />
        <a
          href="https://github.com/janbina"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/janbina
        </a>{" "}
        <br />
        <a
          href="https://www.linkedin.com/in/jan-bina"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/jan-bina
        </a>
      </p>
    </main>
  );
}

export default Index;

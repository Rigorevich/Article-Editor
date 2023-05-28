import React from "react";
import Container from "./components/Container";
import Text from "./components/Text";
import Code from "./components/Code";
import Data from "./Data.json";

function App() {
  const code = `
  import React from "react";
  import styled from "./Container.module.css";
  import classNames from "classnames";

  function App() {
    return (
      <Container>
        <Text variant="heading" text="Something" />
        <Code code={code} language="typescript" />
      </Container>
    );
  }
  
  export default App;
  `;

  return (
    <Container>
      <Text variant="heading" text="Something" />
      <Code code={code} language="typescript" />
      {Data.articles.map((article) => (
        <li>{JSON.stringify(article)}</li>
      ))}
    </Container>
  );
}

export default App;

import React from "react";
import styled from "./Code.module.css";

import { CodeNode } from "../../interfaces/Code";

type CodeProps = {
  code: CodeNode;
};

const Code: React.FC<CodeProps> = ({ code }) => {
  const { data } = code;
  return (
    <div className={styled.wrapper}>
      <div className={styled.language}>{data.language}</div>
      <pre className={styled.code}>
        <code>{data.code}</code>
      </pre>
    </div>
  );
};

export default Code;

import React from "react";
import styled from "./Code.module.css";
import { Code as CodeProps } from "../../interfaces/Code";

const Code: React.FC<CodeProps> = ({ data, language }) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.language}>{language}</div>
      <pre className={styled.code}>
        <code>{data.code}</code>
      </pre>
    </div>
  );
};

export default Code;

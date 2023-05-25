import React from "react";
import styled from "./Code.module.css";

type CodeProps = {
  code: string;
  language: string;
};

const Code: React.FC<CodeProps> = ({ code, language }) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.language}>{language}</div>
      <pre className={styled.code}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Code;

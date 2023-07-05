import React from 'react';
import styled from './Code.module.css';

import { CodeNode } from '@monorepo/api/src/interfaces';

export type CodeProps = {
  code: CodeNode;
};

const Code = ({ code }: CodeProps) => {
  const { data } = code;
  return (
    <div className={styled.wrapper} data-test="code">
      <div className={styled.language}>{data.language}</div>
      <pre className={styled.code}>
        <code>{data.code}</code>
      </pre>
    </div>
  );
};

export default Code;

import React from "react";
import styled from "./Container.module.css";
import classNames from "classnames";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={classNames(styled.container, className)}>{children}</div>
  );
};

export default Container;

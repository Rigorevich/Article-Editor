import classNames from "classnames";
import styled from "./Button.module.css";

type CommonButtonProps = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

type PrimaryButtonProps = CommonButtonProps & {
  primary: boolean;
  secondary?: never;
};
type SecondaryButtonProps = CommonButtonProps & {
  secondary: boolean;
  primary?: never;
};

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

export default function Button({
  children,
  primary = false,
  secondary = false,
  disabled = false,
  ...otherProps
}: ButtonProps) {
  const classes = classNames(styled.button, {
    [styled.primary]: primary,
    [styled.secondary]: secondary,
  });

  return (
    <button className={classes} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
}

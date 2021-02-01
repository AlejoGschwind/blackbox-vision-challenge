import * as React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  icon: string | React.Component;
  isAnswered: boolean;
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  icon,
  children,
  isAnswered,
  ...props
}) => (
  <button className={`${styles.container} ${isAnswered ? styles.answered : ""}`} {...props}>
    <span className={styles.icon}>{icon}</span>
    {children}
  </button>
);

export default Button;

import * as React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  icon: string | HTMLDivElement;
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  icon,
  children,
  ...props
}) => (
  <button className={styles.container} {...props}>
    <span className={styles.icon}>{icon}</span>
    {children}
  </button>
);

export default Button;

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const base =
    "rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles = {
    primary: `${base} bg-black text-white hover:opacity-80`,
    outline: `${base} border border-black text-black hover:bg-black hover:text-white`,
  };

  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
};

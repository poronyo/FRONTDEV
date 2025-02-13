import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0  ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}

export default Container;

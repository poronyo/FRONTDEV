import React from "react";
import Container from "./Container";
interface SectionTitlePage {
  preTitle?: string;
  title: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

function SectionTitle({ preTitle, title, align, children }: SectionTitlePage) {
  return (
    <Container
      className={`flex w-full flex-col mt-4  ${
        align === "left" ? "" : "items-center justify-center text-center"
      } `}
    >
      {preTitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {preTitle}
        </div>
      )}

      {title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
          {title}
        </h2>
      )}

      {children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {children}
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;

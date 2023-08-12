import Link from "@docusaurus/Link";
import React from "react";

const Button = ({
  isButton = false,
  children,
  outlined = false,
  href = null,
  to = "/",
  className = "",
  id = "",
}) => {
  const classNames = {
    isButton:
      "inline-block border-none outline-none px-8 py-2 text-white rounded-md font-heading text-md font-medium hover:text-white no-underline text-center",
    filled: "primary-gradient",
    outlined: "border-gradient bg-[#1b1b1d]",
    inline: "text-tertiary underline",
  };
  const linkProps = {
    [href ? "href" : "to"]: href ? href : to,
    [href ? "rel" : ""]: "noopener noreferrer nofollow",
    [href ? "target" : ""]: "_blank",
  };

  console.log("###linkProps", linkProps);
  return (
    <Link
      className={`cursor-pointer
        ${isButton ? classNames.isButton : classNames.inline}
        ${isButton ? (outlined ? classNames.outlined : classNames.filled) : ""}
        ${className}
      `}
      id={id}
      {...linkProps}
    >
      {children}
    </Link>
  );
};

export default Button;

import React from "react";
import clsx from "clsx";
import SignUpForm from "../../../modules/signup-form";
import styles from "./styles.module.css";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx("bg-[#242526] footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
          <div className="flex flex-col gap-5">
              <img
                src="/img/landing/logo.png"
                className="w-28 object-contain"
              />
              <SignUpForm />
              <p className="text-gray-400 text-sm font-normal leading-loose">
                {copyright}
              </p>
            </div>
            
          </div>
          <div className="col-span-8">{links}</div>
        </div>
      </div>
    </footer>
  );
}

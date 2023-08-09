import React from "react";
import styles from "./styles.module.css";

export const WhyOpenTelemetry = () => {
  const REASONS = [
    {
      title: "No vendor lock-in",
      desc: "Using an open source standard frees you from vendor lock-in.",
      figure: "/img/website/vendorlockin-otel.svg",
    },
    {
      title: "Ease of use",
      desc: "Use auto-instrumentation libraries of OpenTelemetry to get started with little to no code change.",
      figure: "/img/website/vendorlockin-otel.svg",
    },
    {
      title: "Covers all use-cases",
      desc: "OpenTelemetry is a one-stop solution for all your telemetry needs.",
      figure: "/img/website/vendorlockin-otel.svg",
    },
    {
      title: "Standardize Observability",
      desc: "A single standard for all telemetry signals means increased developer productivity, consistency across teams.",
      figure: "/img/website/vendorlockin-otel.svg",
    },
  ];

  return (
    <section>
      <div
        className="container"
        style={{ marginTop: "6rem", marginBottom: "3rem" }}
      >
        <p>SigNoz is OpenTelemetry-Native</p>
        <h2 className="text--center margin-vert--sm">But why OpenTelemetry</h2>
        <p className="hero__subtitle text--center margin-bottom--xl">
          OpenTelemetry is the second most active project in the CNCF, with only
          Kubernetes being more active.
        </p>

        <div className="grid grid-cols-2 gap-10">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex gap-10 items-center">
              <img
                className={styles.iconImage}
                src={reason.figure}
                alt={reason.title}
              />
              <div>
                <h4>{reason.title}</h4>
                <p>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

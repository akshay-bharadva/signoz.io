import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export const SignUp = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <h3 className={styles.tagline}>
            OpenTelemetry-Native <span className="highlight">Metrics</span>,{" "}
            <span className="highlight">Logs</span>, and{" "}
            <span className="highlight">Traces</span> in{" "}
            <span className="highlight">single</span> pane of glass.
          </h3>
          <p className={styles.desc}>
            Check out our hosted and enterprise solutions.
          </p>
          {/* TODO : add click handler */}
          <Link
            id="btn-pricing-give-signoz-try"
            className={`button button--primary ${styles.ctaBtn}`}
            to={"/pricing"}
            // href="https://signoz.io/pricing/"
          >
            Try SigNoz
          </Link>
        </div>
      </div>
    </section>
  );
};

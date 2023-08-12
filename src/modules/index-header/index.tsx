import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { PlaySVG } from "../../svgs/common";

export const Header = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <header className="my-16">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="" style={{ fontWeight: "bold", fontSize: "42px" }}>
          OpenTelemetry-Native Traces,
          <br className="hidden lg:inline" />
          Metrics, and Logs in a single pane
        </p>

        <p className="text-sm mx-auto">
          SigNoz is an open source Datadog or New Relic alternative. A single
          tool for all your observability <br className="hidden lg:inline" />
          needs - APM, logs, metrics, exceptions, alerts, and dashboards powered
          by a powerful query builder.
        </p>

        <div style={{ margin: "1rem 0" }}>
          <Link
            style={{
              margin: "6px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            className="button button--primary "
            href={"/teams/"}
            id="btn-get-started-homepage-hero"
          >
            Try SigNoz Cloud
          </Link>
          <Link
            style={{
              margin: "6px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            className="button button--outline button--secondary "
            href={"/docs/install/"}
            id="btn-self-host-homepage-hero"
          >
            Self Host
          </Link>
        </div>

        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {showVideo === false ? (
            <div
              id={"demo-video-cover"}
              onClick={setShowVideo.bind(this, true)}
              style={{
                background: "url('/videos/demo-mar10-cover.webp')",
                // height: 426,
                width: "80%",
                textAlign: "center",
              }}
            >
              <div id={"demo-overlay"}></div>
              <div id={"demo-content"}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 10,
                  }}
                >
                  SigNoz - Quick Intro
                </div>
                <PlaySVG />
              </div>
            </div>
          ) : (
            <div>
              <video
                width="100%"
                height="480"
                autoPlay
                controls
                id={"demo-video-player"}
              >
                <source
                  src="https://demo-video-1.s3.us-east-2.amazonaws.com/SigNoz-Demo-Sept2-2022.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div> */}
        <div className="flex justify-center items-center relative after:-z-[2] after:absolute after:content-[''] after:w-[600px] after:h-[600px] after:bg-primary-500 after:rounded-full after:opacity-50 after:blur-3xl">
          <div className="p-2 rounded-lg flex justify-center items-center hero-figure">
            <img
              className="rounded-lg"
              src="/img/landing/signoz-landing-snap.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

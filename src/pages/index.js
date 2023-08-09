import React, { Fragment, useEffect, useState } from "react";
import ReactModal from "react-modal";

import { Header } from "../modules/index-header";
import { TrustedByTeams } from "../modules/trusted-by";
import { WhyOpenTelemetry } from "../modules/why-opentelemetry";
import { DataProtection } from "../modules/data-protection";
import { SigNozFeatures } from "../modules/index-features";
import { Testimonials } from "../modules/testimonials";

import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ReactGA from "react-ga";
import styles from "./styles.module.css";
import { LiteYoutubeEmbed } from "react-lite-yt-embed";

import FAQBody from "@site/src/components/FAQ";

ReactGA.initialize("UA-152867655-1");

const getStartedClicked = () => {
  ReactGA.event({
    category: "User",
    action: "Clicked get started button",
  });
};

const requestDemoClicked = () => {
  ReactGA.event({
    category: "User",
    action: "Request Demo Clicked",
  });
};

const WhySigNoz = () => {
  const [feature, setFeature] = useState("pricing");

  const handlePricing = () => {
    setFeature("pricing");
  };

  const handlePrivacy = () => {
    setFeature("olap");
  };

  const handleExtendibility = () => {
    setFeature("tag-filtering");
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className={`col col--3 ${styles.menu__list}`}>
            <button
              onClick={handlePricing}
              className={`button button--lg ${
                feature === "pricing"
                  ? "feature-tab-css__selected"
                  : "feature-tab-css"
              }`}
              style={{ marginBottom: 20, marginTop: 0, whiteSpace: "normal" }}
            >
              Integrated UI for metrics, traces and logs
            </button>
            <button
              onClick={handlePrivacy}
              className={`button button--lg ${
                feature === "olap"
                  ? "feature-tab-css__selected"
                  : "feature-tab-css"
              }`}
              style={{ marginBottom: 20, marginTop: 20, whiteSpace: "normal" }}
            >
              Advanced traces filtering{" "}
            </button>
            <button
              onClick={handleExtendibility}
              className={`button button--lg ${
                feature === "tag-filtering"
                  ? "feature-tab-css__selected"
                  : "feature-tab-css"
              }`}
              style={{ marginBottom: 20, marginTop: 20, whiteSpace: "normal" }}
            >
              Drill down into interesting traces
            </button>
          </div>
          <div className="col col--9">
            <div
              className="hero__screenshot"
              style={{ display: feature === "pricing" ? "block" : "none" }}
            >
              <img
                src={useBaseUrl("img/metrics-tooltip-light-v2.webp")}
                alt="SigNoz screenshot"
              />
            </div>
            <div
              className="hero__screenshot"
              style={{ display: feature === "olap" ? "block" : "none" }}
            >
              <img
                src={useBaseUrl("img/advanced-trace-filtering.webp")}
                alt="SigNoz screenshot"
              />
            </div>
            <div
              className="hero__screenshot"
              style={{
                display: feature === "tag-filtering" ? "block" : "none",
              }}
            >
              <img
                src={useBaseUrl("img/trace-detail.webp")}
                alt="SigNoz screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Your data in your boundary",
    imageUrl: "svgs/icons/your-data-in-your-boundary-dark.svg",
    description: (
      <>
        No need to worry about GDPR and other data protection laws. All your
        tracing and monitoring data is now in YOUR infra.
      </>
    ),
  },
  {
    title: "Metrics, Traces and Logs in one app",
    imageUrl: "svgs/icons/metrics-traces-and-logs-dark.svg",
    description: (
      <>
        Easily correlate from metrics, traces and logs with seamless click
        through from one to other
      </>
    ),
  },
  {
    title: "OpenTelemetry Native",
    imageUrl: "svgs/icons/open-telemetry-native-dark.svg",
    description: (
      <>Take advantage of rich OpenTelemetry ecosystem for instrumentation.</>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={`col col--4 ${styles.feature}`}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function ModalCard(props) {
  const { title, desc, info, link, button } = props;

  return (
    <div
      className="card-demo"
      style={{ width: "100%", marginTop: "1.5rem", maxWidth: "14rem" }}
    >
      <div className="card" style={{ color: "#000", height: "15rem" }}>
        <div className="card__header">
          <h3 style={{ color: "#333333" }}>{title}</h3>
        </div>
        <div className="card__body">
          <p>{desc}</p>
        </div>
        <div className="card__footer" style={{ color: "#2F80ED" }}>
          {info}
        </div>
        {button}
      </div>
    </div>
  );
}

function TrySignozModal(props) {
  const { isOpen, onClose } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="onRequestClose Example"
      onRequestClose={onClose}
      className="Modal try-signoz-modal"
      overlayClassName="Overlay"
    >
      <h1 style={{ marginTop: "2rem", textAlign: "center", color: "#333333" }}>
        Try SigNoz for free
      </h1>
      <div className={"container"}>
        <div className={"row"}>
          <div
            className={"col col--6"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link
              style={{ textDecoration: "none" }}
              href={"/docs/install/docker"}
            >
              <ModalCard
                title={"Open source"}
                desc={"Want to use our free open-source product?"}
                info={
                  <div>
                    Deploy SigNoz to your infrastructure. Free{" "}
                    <div>forever</div>
                  </div>
                }
              />
            </Link>
          </div>

          <div
            className={"col col--6"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Link style={{ textDecoration: "none" }} href={"/pricing"}>
              <ModalCard
                title={"Cloud"}
                desc={"Small business or low volume & don’t want hassle?"}
                info={
                  "This is the simplest way to get started. Create an account"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

function Home() {
  const [showTrySignozModal, setShowTrySignozModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  useEffect(() => {
    ReactModal.setAppElement("#modal-root");
  }, []);

  const closeTrySignozModal = () => {
    setShowTrySignozModal(false);
  };

  return (
    <Fragment>
      <Layout
        title={`Open source APM`}
        description="SigNoz is an open-source APM to help you find issues in your deployed applications & solve them quickly.
      It provides an integrated UI for metrics and traces with deep filtering and aggregation to pin down specific issues very quickly.
      Built with ClickHouse as datastore, it is designed to handle enterprise scale."
      >
        <TrySignozModal
          isOpen={showTrySignozModal}
          onClose={closeTrySignozModal}
        />

        <main className="landing-section">
          <Header />

          <TrustedByTeams />

          <SigNozFeatures />

          <WhyOpenTelemetry />

          <Statistics />

          <Testimonials />

          <Tutorials />

          <section>
            <div
              className="container"
              style={{ marginTop: "6rem", marginBottom: "3rem" }}
            >
              <div class="row">
                <div class="col col--4">
                  <p className="faq_left_panel text--center margin--md">
                    Open source and Free to self-host{" "}
                  </p>
                </div>

                <div class="col col--8">
                  <p className="hero__subtitle margin--md">
                    Frequently Asked Questions
                  </p>
                  <div class="card-demo margin--md">
                    <FAQBody />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container" style={{ marginBottom: "2rem" }}>
              <div class="row">
                <div class="col col--6">
                  <p className="bottom_cta_interested text--center margin--md">
                    Interested in trying out SigNoz?{" "}
                  </p>
                </div>
                <div class="col col--6">
                  <div>
                    <Link
                      className="button button--primary margin--md "
                      href={"/teams/"}
                      id="btn-get-started-homepage-bottom"
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
                      onClick={requestDemoClicked}
                      id="btn-self-hosted-homepage-bottom"
                    >
                      Self Host
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
      <div id={"modal-root"}></div>
    </Fragment>
  );
}

export default Home;

const Statistics = () => {
  const stats = [
    { id: 1, name: "Downloads", value: "3.2M" },
    { id: 2, name: "GitHub Stars", value: "13.7k+" },
    { id: 3, name: "Contributors", value: "100+" },
    { id: 4, name: "Community Members", value: "2.8k+" },
  ];
  return (
    <section>
      <div className="py-16 bg-[#252529]">
        <div className="container">
          <div className="flex flex-col justify-center items-center mb-5">
            <h2 className="text-3xl">Developers ❤️ Open Source SigNoz</h2>
            <p className="text-sm">
              Join our huge open source community and nerd about observability
            </p>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4 justify-center"
                >
                  <div className="text-2xl leading-7 text-white">
                    {stat.name}
                  </div>
                  <div className="order-first text-2xl font-semibold tracking-tight sm:text-5xl text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tutorials = () => {
  return (
    <section>
      <div
        className="container"
        style={{ marginTop: "6rem", marginBottom: "2rem" }}
      >
        <p>LEARN</p>
        <h1 class="text--center ">Tutorials</h1>
        <div class="row">
          <div class="col col--4">
            <div class="card-demo margin--sm">
              <div class="card rounded-none">
                <div class="card__body p-0">
                  <div className="flex flex-col gap-5">
                    <LiteYoutubeEmbed id="oQFMfEc9JNI" mute={false} />
                    <p className="px-5">
                      Using an open source standard frees you from vendor
                      lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col--4">
            <div class="card-demo margin--sm">
              <div class="card rounded-none">
                <div class="card__body p-0">
                  <div className="flex flex-col gap-5">
                    <LiteYoutubeEmbed id="u2PiWKEdjCw" mute={false} />
                    <p className="px-5">
                      Using an open source standard frees you from vendor
                      lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col--4">
            <div class="card-demo margin--sm">
              <div class="card rounded-none">
                <div class="card__body p-0">
                  <div className="flex flex-col gap-5">
                    <LiteYoutubeEmbed id="CgByZJeuRZY" mute={false} />
                    <p className="px-5">
                      Using an open source standard frees you from vendor
                      lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

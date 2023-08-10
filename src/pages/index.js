import React, { Fragment, useEffect, useState } from "react";
import ReactModal from "react-modal";

import { Header } from "../modules/index-header";
import { TrustedByTeams } from "../modules/trusted-by";
import { WhyOpenTelemetry } from "../modules/why-opentelemetry";
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
          <LatestInOpenTelementry />
          <BuildForDevelopers />
          <DataProtection />
          <Observability />
          <Pricing />
          <Statistics />
          <Testimonials />
          <Tutorials />
          <CTA />
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

const LatestInOpenTelementry = () => {
  return (
    <section>
      <div
        className="container"
        style={{ marginTop: "6rem", marginBottom: "2rem" }}
      >
        <p>READ ABOUT</p>
        <h1 className="text--center ">Latest in OpenTelementry</h1>
        <div className="row">
          <div className="col col--4">
            <div className="card-demo margin--sm">
              <div className="card rounded-none">
                <div className="card__body p-0">
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
          <div className="col col--4">
            <div className="card-demo margin--sm">
              <div className="card rounded-none">
                <div className="card__body p-0">
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
          <div className="col col--4">
            <div className="card-demo margin--sm">
              <div className="card rounded-none">
                <div className="card__body p-0">
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

const Tutorials = () => {
  return (
    <section>
      <div
        className="container"
        style={{ marginTop: "6rem", marginBottom: "2rem" }}
      >
        <p>LEARN</p>
        <h1 className="text--center ">Tutorials</h1>
        <div className="row">
          <div className="col col--4">
            <div className="card-demo margin--sm">
              <div className="card rounded-none">
                <div className="card__body p-0">
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
          <div className="col col--4">
            <div className="card-demo margin--sm">
              <div className="card rounded-none">
                <div className="card__body p-0">
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
          <div className="col col--4">
            <div className="card-demo margin--sm">
              <div className="card rounded-none">
                <div className="card__body p-0">
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

const BuildForDevelopers = () => {
  const REASONS = [
    {
      title: "Query Builder",
      desc: "Write queries on all telemetry signals. Run aggregates, and apply filters and formulas to get deeper insights from your data.",
      figure: "",
    },
    {
      title: "Columnar Database",
      desc: "SigNoz uses ClickHouse - a fast open source distributed columnar database. Ingestion and aggregations are lightening fast.",
      figure: "",
    },
    {
      title: "Data Pipelines",
      desc: "Build data pipelines easily with SigNoz OTel Collector. Integrate any existing pipeline with OTel Collector to send data to SigNoz.",
      figure: "",
    },
    {
      title: "Source Code",
      desc: "Check out the entire source code of SigNoz on GitHub. Create issues, build features & integrations, get started without contacting any sales rep.",
      figure: "",
    },
  ];
  return (
    <section class="overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Get granular control over your observability data.
          </p>
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">
            Built for developers like you.
          </h1>
        </div>
        <div class="-my-8 divide-y-2 divide-gray-100 max-w-3xl mx-auto">
          {REASONS.map((reason) => (
            <div class="pb-8 flex flex-wrap md:flex-nowrap" key={reason.title}>
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">
                  CATEGORY
                </span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium mb-2">{reason.title}</h2>
                <p class="leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">
            Pricing you can trust.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Tired of Datadog’s unpredictable bills or New Relic’s user-based
            pricing? We’re here for you.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl mb-2">No user-based pricing</h2>
            <p className="leading-relaxed text-base mb-4">
              Add as many team members as you want.
            </p>
          </div>
          <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl mb-2">
              Simple usage-based pricing
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Only pay for the data you send.
            </p>
          </div>
          <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl mb-2">
              No special pricing for custom metrics
            </h2>
            <p className="leading-relaxed text-base mb-4">
              All metrics charged simply at $0.1 per million samples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section>
      <div className="container" style={{ marginBottom: "2rem" }}>
        <div className="">
          <div className="">
            <p>
              OpenTelemetry-Native Metrics, Logs, and Traces in a single pane of
              glass
            </p>
            <p>Check out our hosted and enterprise solutions.</p>
          </div>
          <div className="">
            <div>
              <Link
                className="button button--primary  "
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
  );
};

const Observability = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <p>Enterprise Grade Observability</p>
        <h2>
          Get access to observability at any scale with advanced security and
          compliance.
        </h2>
      </div>
      <div className="bg-gray-500 max-w-2xl p-5 grid grid-cols-2 mx-auto">
        <div>
          <ul>
            <li>SSO and SAML support</li>
            <li>Query API Keys</li>
            <li>Advanced Security</li>
            <li>AWS Private Link</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col justify-between">
            <ul>
              <li>VPC Peering</li>
              <li>Custom Integrations</li>
            </ul>
            <button>Check Plans</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const DataProtection = () => {
  return (
    <section class="">
      <div class="container flex flex-wrap px-5 py-24 mx-auto items-center">
        <h2>Worried about data protection laws? We can help.</h2>
        <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <p>For SigNoz Cloud</p>
          <h3>Send data to your preferred hosting location</h3>
          <p>
            Store your data in the US, EU or India region depending on your
            needs.
          </p>
          <Link>Try SigNoz Cloud</Link>
        </div>
        <div class="flex flex-col md:w-1/2 md:pl-12">
          <p>For Self-Hosted</p>
          <h3>Have your customer data in your infra</h3>
          <p>
            You can self-host SigNoz or opt for our managed self-hosted
            offerings to have complete adherence to data privacy and regulation
            laws.
          </p>
          <Link>Self Host</Link>
          <Link>Managed by SigNoz in your cloud </Link>
        </div>
      </div>
    </section>
  );
};

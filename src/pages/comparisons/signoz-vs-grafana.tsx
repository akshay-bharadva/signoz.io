import React from "react";
import Layout from "@theme/Layout";
import TopReasons from "../../components/comparison/top-reasons";
import Migration from "../../components/comparison/migration";
import Hero from "../../components/comparison/hero";
import ComparisonGrid from "../../components/comparison/grid";
import GetStarted from "../../components/comparison/get-started";
import ComparisonLayout from "../../components/comparison/layout";
import Link from "@docusaurus/Link";
import { ShowCompanyLogos } from "../../modules/company-logos";

function SigNozVSGrafana() {
  return (
    <Layout title="SigNoz vs Grafana">
      <ComparisonLayout>
        <Hero
          title={COMPARISON_DATA.HERO.TITLE}
          desc={COMPARISON_DATA.HERO.DESC}
          billForComparison={COMPARISON_DATA.HERO.BILL_FOR_COMPARISON}
          trySigNozCloud={COMPARISON_DATA.HERO.TRY_SIGNOZ_CLOUD}
          selfHost={COMPARISON_DATA.HERO.SELF_HOST}
        />
        {/* <Reasons /> */}
        <TopReasons
          points
          title={COMPARISON_DATA.REASON_TITLE}
          reasons={COMPARISON_DATA.REASONS_QNA}
        />
        <ComparisonGrid comparisonData={COMPARISON_DATA.COMPARISON} />
        <TopReasons
          title={COMPARISON_DATA.REASON_TITLE}
          reasons={COMPARISON_DATA.REASONS}
        />
        <ShowCompanyLogos />
        <GetStarted data={COMPARISON_DATA.MIGRATION_SUPPORT} />
      </ComparisonLayout>
    </Layout>
  );
}

export default SigNozVSGrafana;

const COMPARISON_DATA = {
  HERO: {
    TITLE: <>SigNoz vs Grafana</>,
    DESC: (
      <>
        Under the hood, Grafana is powered by multiple tools like Loki, Tempo,
        Mimir & Prometheus. SigNoz is built as a single tool to serve logs,
        metrics, and traces in a single pane of glass from Day 1.
      </>
    ),
    BILL_FOR_COMPARISON: {
      path: "/comparisons/newrelic-savings/",
      className: "button--primary",
      isVisible: false,
    },
    TRY_SIGNOZ_CLOUD: {
      path: "/teams/",
      className: "button--primary",
      isVisible: true,
    },
    SELF_HOST: {
      path: "/comparisons/newrelic-savings/",
      className: "button--outline button--secondary",
      isVisible: true,
    },
  },
  COMPARISON: {
    TITLE: <>Side by Side Comparison</>,
    OTHER_HEADING: "Grafana",
    DATA: [
      {
        sideHeader: "Open Source",
        isAvailableInSignoz: true,
        isAvailableInOther: true,
      },
      {
        sideHeader: "Logs, Metrics, Traces",
        isAvailableInSignoz: true,
        isAvailableInOther: true,
      },
      {
        sideHeader: "APM",
        isAvailableInSignoz: true,
        isAvailableInOther: true,
      },
      {
        sideHeader: "Alerts",
        isAvailableInSignoz: true,
        isAvailableInOther: true,
      },
      {
        sideHeader: "Single Backend",
        isAvailableInSignoz: true,
        isAvailableInOther: false,
        otherExtraDetail:
          "Has multiple backends. Loki for logs, Tempo for traces, and Mimir for metrics",
      },
      {
        sideHeader: "OpenTelemetry visualization",
        isAvailableInSignoz: true,
        isAvailableInOther: false,
        signozExtraDetail: "Best visualizations for OTel data",
      },
      {
        sideHeader: "No user-based pricing",
        isAvailableInSignoz: true,
        isAvailableInOther: false,
        signozExtraDetail: "Free unlimited user seats",
        otherExtraDetail: "$20 per active user",
      },
      {
        sideHeader: "Exceptions Monitoring",
        isAvailableInSignoz: true,
        isAvailableInOther: false,
      },
      {
        sideHeader: "Synthetic Monitoring",
        isAvailableInSignoz: false,
        isAvailableInOther: true,
      },
      {
        sideHeader: "Incident Response",
        isAvailableInSignoz: false,
        isAvailableInOther: true,
      },
      {
        sideHeader: "Easy self-host",
        isAvailableInSignoz: true,
        isAvailableInOther: false,
        otherExtraDetail: "Have to manage multiple backends and configurations",
      },
      {
        sideHeader: "Analytics on high cardinality data",
        isAvailableInSignoz: true,
        isAvailableInOther: false,
        otherExtraDetail: "Loki is not built for high cardinality data",
      },
    ],
  },
  REASON_TITLE: "",
  REASONS: [
    {
      FIGURE: "/img/reasons/signoz-vs-grafana-bill.png",
      TITLE: <>SigNoz is also better value for money.</>,
      DESC: (
        <>
          <p>
            We did a pricing comparsion of SigNoz with other popularity
            observability tools including Grafana. SigNoz can save up to 45% of
            your Grafana bill.
          </p>
          <Link
            href="/blog/pricing-comparison-signoz-vs-datadog-vs-newrelic-vs-grafana/"
            className="button button--primary"
          >
            Read our pricing comparison
          </Link>
        </>
      ),
    },
  ],
  REASONS_QNA: [
    {
      reason: (
        <>
          SigNoz is built as a single application to serve logs, metrics, and
          traces.
        </>
      ),
      reasonDesc: (
        <>
          Grafana started as a data visualization tool. It slowly evolved into a
          tool that can take data from multiple data sources for visualization.
          <br />
          For observability, Grafana offers the LGTM stack (Loki for logs,
          Grafana for visualization, Tempo for traces, and Mimir for metrics).
          You need to configure and maintain multiple configurations for a
          full-stack observability setup.
          <br />
          SigNoz is a single application that provides logs, metrics and traces
          under a single pane of glass. Ingestion, storage, and querying of
          signals are optimized for ease of use and intelligent out-of-box
          correlation between the three signals. There is less operational
          overhead and better developer experience with SigNoz.
        </>
      ),
    },

    {
      reason: <>SigNoz is OpenTelemetry-native</>,
      reasonDesc: (
        <>
          OpenTelemetry is the second most active project in the CNCF, with only
          Kubernetes being more active. Using an open source standard like
          OpenTelemetry for generating telemetry signals frees you from vendor
          lock-in. SigNoz is built to support OpenTelemetry from Day 1.
          <br />
          We provide features like application exceptions to traces from OTel
          data for fast debugging. Grafana also supports OpenTelemetry. But it
          uses different backends for different signals - Loki for logs and
          Tempo for traces.
        </>
      ),
    },

    {
      reason: (
        <>SigNoz uses columnar database for faster ingestion & aggregation</>
      ),
      reasonDesc: (
        <>
          SigNoz uses ClickHouse - a fast open source distributed columnar
          database. Ingestion and aggregations are lightning-fast while
          providing best-in-class compression for economical storage. It was
          built to do analytical queries like Group By fast. Read more on{" "}
          <Link href="/" className={"highlight"}>
            what makes ClickHouse so fast
          </Link>
          .
        </>
      ),
    },

    {
      reason: <>Loki was not built to index and query high-cardinality data</>,
      reasonDesc: (
        <>
          Loki doesn’t perform well if you want to index and query
          high-cardinality data.
          <br />
          <strong className="highlight-secondary">
            “As a Loki user or operator, your goal should be to use the fewest
            labels possible to store your logs. (Source: Grafana)”
          </strong>
          <br />
          We did a{" "}
          <Link className={"highlight"} href="/">
            logs performance benchmark
          </Link>{" "}
          of SigNoz with Elasticsearch and Loki. Below are our key findings for
          Loki for ingestion, querying, and storage:
          <ul>
            <li>
              Ingestion is mostly limited by the number of streams that it can
              handle.
            </li>
            <li>
              For our test queries, Loki was not able to return the results.
            </li>
            <li>
              Loki took the least amount of storage as it indexed only two keys.
            </li>
          </ul>
          SigNoz is able to perform fast aggregation queries and also has
          efficient resource utilization during ingestion.
        </>
      ),
    },

    {
      reason: <>SigNoz is much easier to self-host</>,
      reasonDesc: (
        <>
          If you want a self-hosted solution, SigNoz is a better choice. Since
          Grafana has multiple backends for different telemetry signals, it’s
          difficult to manage. With SigNoz, you only need to manage a single
          backend for a full-stack observability setup. We also provide <Link href="/" className={"highlight"}>managed
          self-host services</Link>.
        </>
      ),
    },
  ],
  MIGRATION_SUPPORT: {
    HACKER_THREAD_TITLE: "",
    TITLE: <>Migrate from Dynatrace to SigNoz with ease.</>,
    DESC: (
      <>
        We provide support for migrating from Dynatrace to SigNoz.{" "}
        <Link href="/comparisons/migrate-from-newrelic/" className="highlight">
          Request a migration support
        </Link>{" "}
        from one of our experts and get started with SigNoz quickly.
      </>
    ),
  },
};

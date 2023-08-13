import React, { useState } from "react";
import styles from "./styles.module.css";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Heading from "../../components/ui/Heading";
import SubHeading from "../../components/ui/SubHeading";

export const SigNozFeatures = () => {
  const [tab, setTab] = useState("traces");
  const FEATURES_LIST = [
    {
      label: "Distributed Tracing",
      value: "traces",
      figure: "img/website/traces.png",
      icon: "/img/landing/icon-placeholder.png",
      content: (
        <>
          <ul>
            <li className="mb-2 text-lg">
              End-to-end visibility of your services with rich contextual tags
              and attributes
            </li>
            <li className="mb-2 text-lg">
              Run advanced aggregates on trace data to get business relevant
              metrics
            </li>
            <li className="mb-2 text-lg">
              Powerful filters to drive insights faster
            </li>
            <li className="mb-2 text-lg">
              Flame graphs and Gantt Charts to visualize flow of requests easily
            </li>
          </ul>
        </>
      ),
    },
    {
      label: "Logs Management ",
      value: "logs",
      figure: "img/website/logs.png",
      icon: "/img/landing/icon-placeholder.png",
      content: (
        <>
          <ul>
            <li className="mb-2 text-lg">
              Native Support for OpenTelemetry Logs
            </li>
            <li className="mb-2 text-lg">
              Advanced Log Query Builder to help you search & filter logs easily
            </li>
            <li className="mb-2 text-lg">
              Automatic Log Collection from K8s cluster
            </li>
            <li className="mb-2 text-lg">
              Uses Columnar Database (ClickHouse) for lightening quick Log
              analytics
              <a
                target="_blank"
                href="https://signoz.io/blog/logs-performance-benchmark/"
              >
                [Logs Perf. Benchmark]
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      label: "Metrics & Dashboards ",
      value: "metrics",
      figure: "img/website/metrics.png",
      icon: "/img/landing/icon-placeholder.png",
      content: (
        <>
          <ul>
            <li className="mb-2 text-lg">
              Out-of-box charts for application metrics like p90, p99 latency,
              error rates, request rates, etc.
            </li>
            <li className="mb-2 text-lg"> Custom & Business Metrics </li>
            <li className="mb-2 text-lg">
              A powerful metrics query builder to create customized charts
            </li>
            <li className="mb-2 text-lg">OpenTelemetry Metrics SDK support</li>
          </ul>
        </>
      ),
    },
    {
      label: "Infrastructure Monitoring",
      value: "infra",
      figure: "img/website/infrastructure.png",
      icon: "/img/landing/icon-placeholder.png",
      content: (
        <>
          <ul>
            <li className="mb-2 text-lg">
              End-to-End visibility into infrastructure performance
            </li>
            <li className="mb-2 text-lg">
              Ingest metrics from all kinds of host environments
            </li>
            <li className="mb-2 text-lg">
              Correlate infrastructure and application metrics for contextual
              insights
            </li>
            <li className="mb-2 text-lg">
              Build customized dashboards with powerful query builder
            </li>
          </ul>
        </>
      ),
    },
    {
      label: "Exceptions ",
      value: "exceptions",
      figure: "img/website/exceptions.png",
      icon: "/img/landing/icon-placeholder.png",
      content: (
        <>
          <ul>
            <li className="mb-2 text-lg">
              Record exceptions automatically in Python, Java, Ruby, and
              Javascript
            </li>
            <li className="mb-2 text-lg">
              Rich contextual data with stack trace, exceptions attributes and
              linked span data
            </li>
            <li className="mb-2 text-lg">
              Exceptions grouping and custom exceptions
            </li>
            <li className="mb-2 text-lg">
              Navigate from Exceptions to related traces to observe the
              exception in trace execution context
            </li>
          </ul>
        </>
      ),
    },
    {
      label: "Alerts ",
      value: "alerts",
      figure: "img/website/alerts.png",
      icon: "/img/landing/icon-placeholder.png",
      content: (
        <>
          <ul>
            <li className="mb-2 text-lg">
              Easy to set alerts with DIY query builder
            </li>
            <li className="mb-2 text-lg">
              Support for PromQL for users familiar with Prometheus alert
              manager
            </li>
            <li className="mb-2 text-lg">
              Support for multiple notification channels like Slack and
              PagerDuty
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section>
      <div className={`container my-10 mb-16`}>
        <div className="flex flex-col items-center mb-5 text-center mx-auto max-w-4xl">
          <Heading type={4}>EXPLORE SIGNOZ</Heading>
          <Heading type={1}>One Stop Observability</Heading>
          <SubHeading>
            You don’t need to manage multiple tools for traces, metrics, and
            logs. Get great out-of-the-box charts and a powerful query builder
            to dig deeper into your data.
          </SubHeading>
        </div>

        <div className="max-w-6xl mx-auto hidden lg:block">
          <div className={`grid grid-cols-6 feature-tabs mb-5`}>
            {FEATURES_LIST.map((feature, idx) => (
              <div
                key={feature.value}
                onClick={() => setTab(feature.value)}
                className={`cursor-pointer pt-5 rounded-t-lg flex flex-col gap-2 justify-center items-center text-center ${
                  tab === feature.value ? "active" : ""
                }`}
              >
                <img
                  src={feature.icon}
                  alt={feature.label}
                  className="w-10 h-10"
                />
                <p
                  className={`text-sm ${
                    tab === feature.value ? "text-gray-100" : "text-gray-400"
                  }`}
                >
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
          <div className="bluish-gradient overflow-hidden rounded-lg">
            {FEATURES_LIST.map((feature, idx) => (
              <div
                key={feature.label}
                className={`grid grid-cols-2 ${
                  tab === feature.value ? "" : "hidden"
                }`}
              >
                <div className="rounded-md overflow-hidden">
                  <img
                    src={feature.figure}
                    alt={feature.label}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
                <div className="px-16 py-10">{feature.content}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto lg:hidden">
          <div className="rounded-lg overflow-hidden feature-accordion-container">
            {FEATURES_LIST.map((feature) => {
              return (
                <div
                  className={`feature-accordion ${
                    tab === feature.value ? "bluish-gradient" : ""
                  }`}
                  key={feature.value}
                >
                  <div
                    onClick={() => setTab(feature.value)}
                    className="cursor-pointer px-5 py-5 flex justify-between items-center"
                  >
                    <div className="flex justify-center items-center gap-5">
                      <img
                        src={feature.icon}
                        alt={feature.label}
                        className="w-5 h-5"
                      />
                      <Heading type={5} className={"m-0"}>
                        {feature.label}
                      </Heading>
                    </div>
                    <span
                      className={`h-5 w-5 flex justify-center items-center ${
                        tab === feature.value ? "open" : ""
                      }`}
                    >
                      <DownArrow />
                    </span>
                  </div>
                  <div
                    className={`${
                      tab === feature.value ? "visible" : "hidden"
                    }`}
                  >
                    <div className="px-5 py-4">
                      <div className="max-w-sm mx-auto">
                        <img
                          src={feature.figure}
                          alt={feature.label}
                          className="h-full object-cover rounded-xl"
                        />
                      </div>
                      <div>{feature.content}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

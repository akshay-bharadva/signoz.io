import React from "react";
import styles from "./styles.module.css";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export const SigNozFeatures = () => {
  return (
    <section>
      <div className={`container ${styles.featureContainer}`}>
        <div className="flex flex-col justify-center items-center ">
          <p>EXPLORE SIGNOZ</p>
          <h2>One Stop Observability</h2>
          <p>
            You don’t need to manage multiple tools for traces, metrics, and
            logs. Get great out-of-the-box charts and a powerful query builder
            to dig deeper into your data.
          </p>
        </div>

        <Tabs
          className={styles.tabStyling}
          defaultValue="traces"
          values={[
            { label: "Distributed Tracing", value: "traces" },
            { label: "Logs Management ", value: "logs" },
            { label: "Metrics & Dashboards ", value: "metrics" },
            { label: "Infrastructure Monitoring", value: "infra" },
            { label: "Exceptions ", value: "exceptions" },
            { label: "Alerts ", value: "alerts" },
          ]}
        >
          <TabItem className={styles.tabStyling} value="traces">
            <div className="grid grid-cols-2 gap-10 bg-indigo-300 bg-opacity-25 rounded-xl overflow-hidden">
              <div className="">
                <img
                  src={"img/website/traces.png"}
                  alt="Distributed Tracing"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
              <div className="">
                <h3>Distributed Tracing</h3>
                <ul>
                  <li>
                    End-to-end visibility of your services with rich contextual
                    tags and attributes
                  </li>
                  <li>
                    Run advanced aggregates on trace data to get business
                    relevant metrics
                  </li>
                  <li> Powerful filters to drive insights faster </li>
                  <li>
                    Flame graphs and Gantt Charts to visualize flow of requests
                    easily
                  </li>
                </ul>
              </div>
            </div>
          </TabItem>

          <TabItem className={styles.tabStyling} value="logs">
            <div className="grid grid-cols-2 gap-10 bg-indigo-300 bg-opacity-25 rounded-xl overflow-hidden">
              <img
                src={"img/website/logs.png"}
                alt="Logs Management"
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="">
                <h3>Logs Management</h3>
                <ul>
                  <li> Native Support for OpenTelemetry Logs </li>
                  <li>
                    Advanced Log Query Builder to help you search & filter logs
                    easily
                  </li>
                  <li> Automatic Log Collection from K8s cluster </li>
                  <li>
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
              </div>
            </div>
          </TabItem>

          <TabItem className={styles.tabStyling} value="metrics">
            <div className="grid grid-cols-2 gap-10 bg-indigo-300 bg-opacity-25 rounded-xl overflow-hidden">
              <img
                src={"img/website/metrics.png"}
                alt="Metrics Monitoring"
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="">
                <h3>Metrics Monitoring</h3>
                <ul>
                  <li>
                    Out-of-box charts for application metrics like p90, p99
                    latency, error rates, request rates, etc.
                  </li>
                  <li> Custom & Business Metrics </li>
                  <li>
                    A powerful metrics query builder to create customized charts
                  </li>
                  <li> OpenTelemetry Metrics SDK support </li>
                </ul>
              </div>
            </div>
          </TabItem>

          <TabItem className={styles.tabStyling} value="infra">
            <div className="grid grid-cols-2 gap-10 bg-indigo-300 bg-opacity-25 rounded-xl overflow-hidden">
              <img
                src={"img/website/infrastructure.png"}
                alt="Infrastructure Monitoring"
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="">
                <h3>Infrastructure Monitoring</h3>
                <ul>
                  <li>End-to-End visibility into infrastructure performance</li>
                  <li> Ingest metrics from all kinds of host environments </li>
                  <li>
                    Correlate infrastructure and application metrics for
                    contextual insights
                  </li>
                  <li>
                    Build customized dashboards with powerful query builder
                  </li>
                </ul>
              </div>
            </div>
          </TabItem>

          <TabItem className={styles.tabStyling} value="exceptions">
            <div className="grid grid-cols-2 gap-10 bg-indigo-300 bg-opacity-25 rounded-xl overflow-hidden">
              <img
                src={"img/website/exceptions.png"}
                alt="Exceptions Monitoring"
                className="h-full w-full object-cover rounded-xl"
              />
              <div className="">
                <h3>Exceptions Monitoring</h3>
                <ul>
                  <li>
                    Record exceptions automatically in Python, Java, Ruby, and
                    Javascript
                  </li>
                  <li>
                    Rich contextual data with stack trace, exceptions attributes
                    and linked span data
                  </li>
                  <li> Exceptions grouping and custom exceptions </li>
                  <li>
                    Navigate from Exceptions to related traces to observe the
                    exception in trace execution context
                  </li>
                </ul>
              </div>
            </div>
          </TabItem>

          <TabItem className={styles.tabStyling} value="alerts">
            <div className="grid grid-cols-2 gap-10 bg-indigo-300 bg-opacity-25 rounded-xl overflow-hidden">
              <img
                src={"img/website/alerts.png"}
                alt="Alerts Management"
                className="h-full w-full object-cover rounded-xl"
              />

              <div className="">
                <h3>Alerts Management</h3>
                <ul>
                  <li> Easy to set alerts with DIY query builder </li>
                  <li>
                    Support for PromQL for users familiar with Prometheus alert
                    manager
                  </li>
                  <li>
                    Support for multiple notification channels like Slack and
                    PagerDuty
                  </li>
                </ul>
              </div>
            </div>
          </TabItem>
        </Tabs>
      </div>
    </section>
  );
};

import React, { Fragment, useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Heading from "../components/ui/Heading";
import Hero from "../components/ui/Hero";
import SubHeading from "../components/ui/SubHeading";
import Button from "../components/ui/Button";

function Home() {
  return (
    <Fragment>
      <Layout
        title={`SigNoz Design System`}
        description="SigNoz is an open-source APM to help you find issues in your deployed applications & solve them quickly.
      It provides an integrated UI for metrics and traces with deep filtering and aggregation to pin down specific issues very quickly.
      Built with ClickHouse as datastore, it is designed to handle enterprise scale."
      >
        <div className="container">
          <Hero>Hero</Hero>
          <Heading type={1}>Heading 1</Heading>
          <Heading type={2}>Heading 2</Heading>
          <Heading type={3}>Heading 3</Heading>
          <Heading type={4}>Heading 4</Heading>
          <Heading type={5}>Heading 5</Heading>
          <Heading type={6}>Heading 6</Heading>
          <SubHeading>This is subheading.</SubHeading>
          <Button isButton href={"https://github.com/SigNoz/signoz"}>
            Repo
          </Button>
          <Button isButton outlined to="/pricing">
            Pricing
          </Button>
          <Button href={"https://github.com/SigNoz/signoz"}>Repo</Button>
          <Button to="/teams">teams</Button>
          <div className="flex gap-5 justify-center">
            <Button
              isButton
              href={"https://github.com/SigNoz/signoz"}
              className="w-96"
            >
              Repo
            </Button>
            <Button isButton outlined to="/pricing" className="w-96">
              Pricing
            </Button>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}

export default Home;

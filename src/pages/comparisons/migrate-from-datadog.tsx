import React from "react";
import Layout from "@theme/Layout";
import { HubspotProvider } from "@aaronhayes/react-use-hubspot-form";
import MigrateSaving from "../../components/comparison/migrate-saving";

function MigrateFromDatadog() {
  return (
    <Layout title="Migrate from Datadog">
      <HubspotProvider>
        <MigrateSaving data={DATA} />
      </HubspotProvider>
    </Layout>
  );
}
export default MigrateFromDatadog;

const DATA = {
  TITLE: "Migrate easily from Datadog",
  DESC: "Please provide your contact info and we will reach out to you. We will understand your requirements and help you get started with SigNoz.",
  PORTAL_ID: "22308423",
  FORM_ID: "6039fbdd-3964-42df-8681-c42a676c1f1e",
};

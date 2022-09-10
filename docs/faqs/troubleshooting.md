---
id: troubleshooting
title: Troubleshooting - FAQs
description: Frequently Asked Questions About Troubleshooting

---

### How to run SigNoz in debug mode?

You might want to follow our troubleshooting docs.

Refer here:

- [SigNoz Troubleshooting Docs](https://signoz.io/docs/install/troubleshooting/)
- [SigNoz Troubleshoot Github Repository](https://github.com/SigNoz/troubleshoot)
- [SigNoz YouTube Video on Troubleshooting](https://www.youtube.com/watch?v=Y7OkvmuTRQ8)

### How do I know if SigNoz is accessible from my Application?

We have a troubleshooting guide to check if  SigNoz is accessible from your application or not or, is the instrumentation not working or the application is not instrumented in the first place?

Set `OTEL_TRACES_EXPORTER=console` and observe. If it doesn’t output the traces to the stdout, the instrumentation is not working or your application isn’t correctly instrumented in the first place.

Refer here:

- [SigNoz Troubleshooting Docs](https://signoz.io/docs/install/troubleshooting/#kubernetes)
- [SigNoz Troubleshoot Github Repository](https://github.com/SigNoz/troubleshoot)
- [SigNoz YouTube Video on Troubleshooting](https://www.youtube.com/watch?v=Y7OkvmuTRQ8)

### I have installed SigNoz on Windows Kubernetes, but I can't make it work.

We don't support Microsoft Windows as of now.

### I am not seeing all my services related to my application listed in the Services tab, what could be the potential reason?

We rely on the semantic conventions provided by OpenTelemetry. Every unique `service.name`
 configured and received is part of the service list. You can read more about it from our [docs](https://signoz.io/docs/userguide/metrics/#open-the-services-section).


### My services are not showing up in the Service Map section (but present in the services and traces tab), what should I do?

You might need to zoom out a bit to see your service. Also, if you’re getting started the service map shows services from the sample hotrod application. Since your services are not connected to the hotrod application, it will appear isolated.
/// <reference path="./.sst/platform/config.d.ts" />

// import {gatewayApi, coreApi} from "./cloud";

export default $config({
  app(input) {
    return {
      name: "sst-v3",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    // const gatewayApi = gatewayApi()
    // const coreApi = coreApi()
    const cloud = await import("./cloud")

    return {
      gatewayApi: cloud.gatewayApi().url,
      coreApi: cloud.coreApi().url,
    };
  },
});

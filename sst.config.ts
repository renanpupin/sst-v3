/// <reference path="./.sst/platform/config.d.ts" />

import {gatewayApi} from "./cloud";

export default $config({
  app(input) {
    return {
      name: "sst-v3",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const api = gatewayApi()

    return {
      gatewayApi: api.url,
    };
  },
});

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
  // console: {
  //   autodeploy: {
  //     target(event) {
  //       // if (event.type === "branch" && event.branch === "staging") return;
  //       if (event.type === "branch" && event.branch === "main" && event.action === "pushed") {
  //         return {
  //           stage: "production",
  //           // stage: event.branch
  //           //     .replace(/[^a-zA-Z0-9-]/g, "-")
  //           //     .replace(/-+/g, "-")
  //           //     .replace(/^-/g, "")
  //           //     .replace(/-$/g, ""),
  //           runner: { engine: "codebuild", compute: "large" }
  //         };
  //       }
  //
  //       if (event.type === "pull_request") {
  //         return { stage: `pr-${event.number}` };
  //       }
  //     }
  //   }
  // },
  async run() {
    // $transform(sst.aws.Function, (args) => {
    //   args.runtime = "nodejs14.x";
    //   args.environment = {
    //     FOO: "BAR",
    //   };
    // });


    // const secret = new sst.Secret("MySecret", "my-secret-placeholder-value");

    const cloud = await import("./cloud")

    // https://github.com/sst/sst/blob/dev/examples/aws-prisma/sst.config.ts
    // https://github.com/sst/sst/blob/dev/examples/aws-dead-letter-queue/sst.config.ts

    return {
      gatewayApi: cloud.gatewayApi().url,
      coreApi: cloud.coreApi().url,
    };
  },
});

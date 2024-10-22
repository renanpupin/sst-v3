// export const api = new sst.aws.Function("Api", {
//     url: true,
//     handler: "./packages/functions/src/api.handler",
//     environment: {
//         foo: "9",
//     },
// });

export const gatewayApi = () => {
    const api = new sst.aws.ApiGatewayV2("GatewayApi", {
        transform: {
            route: {
                handler: (args, opts) => {
                    // Set the default if it's not set by the route
                    args.timeout ??= "30 seconds";
                    // args.memory ??= "2048 MB";
                }
            }
        }
    });
    api.route("GET /", {
        handler: "services/gateway/src/index.handler",
    });
    return api
}

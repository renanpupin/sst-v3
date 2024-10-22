// export const api = new sst.aws.Function("Api", {
//     url: true,
//     handler: "./packages/functions/src/api.handler",
//     environment: {
//         foo: "9",
//     },
// });

export const coreApi = () => {
    const api = new sst.aws.ApiGatewayV2("CoreApi");
    api.route("GET /", {
        handler: "services/core/src/index.handler",
    });
    return api
}

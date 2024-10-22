// export const api = new sst.aws.Function("Api", {
//     url: true,
//     handler: "./packages/functions/src/api.handler",
//     environment: {
//         foo: "9",
//     },
// });

export const gatewayApi = () => {
    const api = new sst.aws.ApiGatewayV2("MyApi");
    api.route("GET /", {
        handler: "src/index.handler",
    });
    return api
}

import { hello } from "@sst-v3/core/utils";

export async function handler() {
    return {
        statusCode: 200,
        body: `Success gateway!!! ${hello()}`,
    };
}

const request = require('supertest');
require('dotenv').config();

export default async (expectedStatus, params) => {
    const url = process.env.BASE_URL;
    const res = await request(url)
    .post(`${url}`)
    .set(params.headers)
    .send(params.body)
    .expect(expectedStatus);

    return {
        request: {
            url: `${url}`,
            headers: params.headers,
            body: params.body
        },
        response: {
            statusCode: res.status,
            body: res.text
        }
    };
};

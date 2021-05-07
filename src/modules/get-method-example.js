const request = require('supertest');
require('dotenv').config();

export default async (expectedStatus, params) => {
  const url = process.env.BASE_URL;
  const res = await request(url)
    .get(`${url}`)
    .set(params.headers)
    .expect(expectedStatus);

  return {
    request: {
      url: `${url}`,
      headers: params.headers,
      body: {}
    },
    response: {
      statusCode: res.status,
      body: res.text
    }
  };
};

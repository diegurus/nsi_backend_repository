import getExampleMethod from '../modules/get-method-example.js'

export default () => {
  describe('Example Flow:', () => {
    const headersObj = {
        'Content-type': 'application/json; charset=UTF-8',
    };

    test('Example Test', async () => {
        const responseObj = await getExampleMethod(200, {
            headers: headersObj
        });
        const body = JSON.parse(responseObj.response.body);
        expect(body.value).toEqual("something");
     });


  });
};

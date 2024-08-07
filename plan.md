create user.test.js file
write bare bones test
test the callback

Whilst exploring the codebase earlier, you may have noticed a `GET /api/health` endpoint in the `app.js` file. Your next task is to learn how to use Supertest to send a GET request to this API endpoint within the test you started in the previous ticket.

send GET request to API with test already created
## 🎫 Ticket 5 - Making assertions

Your next task is to add assertions to the existing test, so that you can check whether certain aspects of the API response are as expected. Before you make assertions in the test, it's useful to first think about what things does the test actually need to check.

- Assert that the response body is an object with the structure below:
  - `{ success: true, payload: "API is running correctly" }`
  - Why: This is what the response body should always be for the `GET /api/health` endpoint
  - Vitest offers matchers that allow you check if an object has a particular structure. Have a look at the documentation and examples.
- Assert that the response status code is 200
  - Why: HTTP status code 200 indicates the request was successful and this is what the response status code should always be for the `GET /api/health` endpoint
- Assert that the Content-Type response header contains `application/json`.
  - Why: The `GET /api/health` endpoint should always respond with JSON and also let the client know that the response body contains JSON.

If you're stuck on how to make assertions, remember that `expect` is a function provided by Vitest that lets you create assertions. To see examples of how to use it, look at the documentation for `expect`.

Once you're done, re-run the test and check that it still passes. You can try checking if the test fails by temporarily breaking implementation for that endpoint in `app.js` (once you're done, change the implementation back so that the test passes).

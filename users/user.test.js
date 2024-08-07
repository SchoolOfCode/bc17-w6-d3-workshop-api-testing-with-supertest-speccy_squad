import { test, it, expect } from "vitest";
import request from "supertest";
import app from "../app.js";

//bare bones test
test("GET /api/health works", () => {});

// const request = require("supertest");
// const express = require("express");

// const app = express();

// app.get("/user", function (req, res) {
//   res.status(200).json({ name: "john" });
// });

//   it("responds with json", async function () {
//     const response = await request(app).get("/users").set("Accept", "application/json");
//     expect(response.headers["Content-Type"]).toMatch(/json/);
//     expect(response.status).toEqual(200)
//   });

it("Respond with JSON to GET request /api/health", async function () {
  const response = await request(app).get("/api/health");
  expect(response.headers["content-type"]).toMatch(/json/);
  expect(response.status).toEqual(200);
  expect(response.body).toEqual({ success: true, payload: "API is running correctly" });
  console.log(response.body);
});

it("GET /api/users", async function () {

});

// then within the test:
//    ARRANGE:
//      use the `resetUsersTable` function to reset the database table to a known state
//    ACT:
//      use Supertest to send a GET request to the `/api/users` endpoint
//      wait for the response
//    ASSERT:
//      assert that the response body is an object
//      assert that response body.success is true
//      assert that response body.payload is an array
//      loop over the payload array. for each user object in the payload array:
//          assert that user object.id is a number
//          assert that user object.username is a string
//      assert that the response status code is 200
//      assert that there's a Content-Type response header which contains `application/json`
//      any other assertions that you think would be useful
// run tests to ensure they passes
// temporarily break the implementation in `users/users.controller.js` to ensure test fails and then change back so that tests pa
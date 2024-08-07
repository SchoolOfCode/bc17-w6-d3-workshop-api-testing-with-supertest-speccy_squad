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
  console.log(response.body);
});

require("dotenv").config();
const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${process.env.API_URL}movie/now_playing?&api_key=${process.env.API_KEY}&language=en-US`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.render("index", { results: data.results, route: "/" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/movies", async (req, res) => {
  const { data } = await axios({
    method: "get",
    url: `${process.env.API_URL}movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  res.render("movies", { results: data.results, route: "/movies" });
});

router.get("/shows", async (req, res) => {
  const { data } = await axios({
    method: "get",
    url: `${process.env.API_URL}tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  res.render("shows", { results: data.results, route: "/shows" });
});

router.get("/trending", async (req, res) => {
  const { data } = await axios({
    method: "get",
    url: `${process.env.API_URL}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  res.render("trending", { results: data.results, route: "/trending" });
});

module.exports = router;

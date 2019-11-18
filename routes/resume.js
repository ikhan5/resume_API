const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// @route   GET api/resume
// @desc    Get Imzan Khan's resume
// @access  Private
router.get("/", auth, (req, res) => {
  res.json({
    msg: "I created this API using Node.js, Express, and MongoDB.",
    repo: "https://github.com/ikhan5/resume_API",
    email: 'contact@imzankhan.ca',
    education: [
      {
        school: "Humber College",
        achieved: "Electronics Engineering Technology Diploma",
        year: 2015
      },
      {
        school: "Lakehead University",
        achieved: "Bachelor's of Engineering: Electrical Engineering",
        year: 2017
      },
      {
        school: "Humber College",
        achieved: "Web Development Certificate",
        year: 2019
      }
    ],
    skills: [
      "HTML5/CSS3",
      "JavaScript",
      "Vue.js",
      "PHP",
      "Laravel",
      "MySQL",
      "Node.js",
      "Express",
      "MongoDB",
      "Boostrap"
    ],
    favourites: { color: "Blue", sport: "Basketball", hobby: "Video Games" }
  });
});

module.exports = router;

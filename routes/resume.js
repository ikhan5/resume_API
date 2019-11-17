const express = require("express");
const router = express.Router();

// @route   GET api/resume
// @desc    Get Imzan Khan's resume
// @access  Private
router.get("/", (req, res) => {
  res.json({
    msg: "This is a few things about Imzan Khan",
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

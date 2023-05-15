const router = require("express").Router();
const { Router } = require("express");
const mmmseController = require("../Controllers/mmseController");

router.route("/addRecords").post((req, res) => {
  console.log(req)
  const response = mmmseController.addNewMMSEScoreController(
    req.body,
    res
  )
});

router.route("/viewRecords").post((req, res) => {
  const response = mmmseController.viewMMSEScoreController(
    req.body,
    res
  );
});

module.exports = router;
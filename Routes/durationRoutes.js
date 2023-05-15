const router = require("express").Router();
const { Router } = require("express");
const durationController = require("../Controllers/timeDurationController");

router.route("/addRecords").post((req, res) => {
    console.log(req)
    const response = durationController.addNewDurationcoreController(
        req.body,
        res
    )
});
router.route("/viewRecords").post((req, res) => {
    // console.log(req)
    const response = durationController.viewDurationcoreController(
        req.body,
        res
    )
});

module.exports = router;
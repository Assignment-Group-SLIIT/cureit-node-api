const router = require("express").Router();
const { Router } = require("express");
const gameController = require("../Controllers/gameController");

router.route("/addRecords").post((req, res) => {
    console.log(req)
    const response = gameController.addNewGameController(
        req.body,
        res
    )
});

router.route("/viewRecords").post((req, res) => {
    const response = gameController.viewGameController(
        req.body,
        res
    );
});

module.exports = router;
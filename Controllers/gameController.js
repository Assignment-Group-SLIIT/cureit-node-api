const { response } = require("express");
const gameService = require('../Services/gameServices')

module.exports.addNewGameController = async (req, res) => {
    console.log("req", req)
    try {
        let response = await gameService.addNewGameRecordService(req);
        if (response.msg = 'success') {
            return res.status(200).send({ message: "Gane record added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add Game record" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}


module.exports.viewGameController = async (req, res) => {
    try {
        let response = await gameService.viewGameRecordsService(req);
        if (response.msg = 'success') {
            return res.status(200).send({
                message: "Game records Retrieved successfuly",
                data: response.data,
            });
        } else {
            return res.status(400).send({
                message: "Failed to retrieve Game records",
                data: null
            });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}
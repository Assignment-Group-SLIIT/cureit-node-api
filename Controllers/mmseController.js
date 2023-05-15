const { response } = require("express");
const mmseService = require('../Services/mmseScoreService')

module.exports.addNewMMSEScoreController = async (req, res) => {
    console.log("req", req)
    try {
        let response = await mmseService.addNewMMSERecordService(req);
        if (response.msg = 'success') {
            return res.status(200).send({ message: "MMSE record added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add MMSE record" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}


module.exports.viewMMSEScoreController = async (req, res) => {
    try {
        let response = await mmseService.viewMMSERecordsService(req);
        if (response.msg = 'success') {
            return res.status(200).send({
                message: "MMSE records Retrieved successfuly",
                data: response.data,
            });
        } else {
            return res.status(400).send({
                message: "Failed to retrieve MMSE records",
                data: null
            });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}
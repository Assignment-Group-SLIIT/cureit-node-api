const { response } = require("express");
const timeDurationService = require('../Services/timedurationSerive')

module.exports.addNewDurationcoreController = async (req, res) => {
    console.log("req", req)
    try {
        let response = await timeDurationService.addNewDurationRecordService(req);
        if (response.msg = 'success') {
            return res.status(200).send({ message: "MMSE record added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add MMSE record" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

module.exports.viewDurationcoreController = async (req, res) => {
    // console.log("req", req)
    try {
        let response = await timeDurationService.viewDurationTableRecordsService(req);
        if (response.msg = 'success') {
            return res.status(200).send({ message: "MMSE record added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add MMSE record" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}
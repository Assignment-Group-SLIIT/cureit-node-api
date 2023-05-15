const { response } = require("express");
const mongoose = require("mongoose");
const MMSE = require("../schemas/mmseModel");

module.exports.addNewMMSERecordService = async (req, res) => {
    console.log("req", req.timeStamp);
    try {

        const userID = req.userID;
        const mmseScore = req.mmseMarks;
        const month = req.month;
        const timeStamp = req.timeStamp;

        const newMMSEScore = new MMSE({
            userID,
            mmseScore,
            month,
            timeStamp,

        });

        const response = await newMMSEScore.save();

        return {
            msg: "success",
            data: response,
        };
    } catch (err) {
        throw err;
    }
}

module.exports.viewMMSERecordsService = async (req, res) => {
    console.log(req)
    try {
        const userID = req.userID;

        const response = await MMSE.find({ userID: userID }).sort({ _id: -1 }).limit(1);

        if (response) {
            return {
                msg: "success",
                data: response[0],
            };
        } else {
            return {
                msg: "faild",
                data: response,
            }
        }
    } catch (err) {
        throw err;
    }
}

// module.exports.getNewMMSERecordService = async (req, res) => {
//     console.log("req", req.timeStamp);
//     try {

//         const userID = req.userID;


//         // const newMMSEScore = new MMSE({
//         //     userID,
//         //     mmseScore,
//         //     timeStamp
//         // });

//         const response = await newMMSEScore.find({ userID: userID }).sort({ _id: -1 }).limit(1);
//         console.log("ress>>>", response)

//         return {
//             msg: "success",
//             data: response,
//         };
//     } catch (err) {
//         throw err;
//     }
// }

// module.exports.viewMMSERecordsService = async (req, res) => {
//     try {
//         const userID = req.userID;

//         const response = await newMMSEScore.find({ userID: userID }).sort({ _id: -1 }).limit(1);

//         if (response) {
//             return {
//                 msg: "success",
//                 data: response,
//             };
//         } else {
//             return {
//                 msg: "faild",
//                 data: response,
//             }
//         }
//     } catch (err) {
//         throw err;
//     }
// }
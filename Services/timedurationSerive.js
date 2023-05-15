const { response } = require("express");
const mongoose = require("mongoose");
const Duration = require("../schemas/timeDuration");

module.exports.addNewDurationRecordService = async (req, res) => {
    console.log("req", req);
    try {

        const userID = req.userID;
        const game = req.game
        const duration = req.duration;
        const month = req.month;
        const timeStamp = req.timeStamp;

        const newDurationRecord = new Duration({
            userID,
            game,
            duration,
            month,
            timeStamp,

        });

        const response = await newDurationRecord.save();

        return {
            msg: "success",
            data: response,
        };
    } catch (err) {
        throw err;
    }
}

module.exports.viewDurationTableRecordsService = async (req, res) => {
    console.log(req)
    try {
        const userID = req.userID;




        // Get the current date
        var currentDate = new Date();

        // Get the month of the current date (0 - January, 1 - February, ...)
        var currentMonth = currentDate.getMonth();

        // Subtract 4 from the current month to get the starting month
        var startingMonth = currentMonth - 4;

        // Adjust the starting month to ensure it's within the valid range (0 - 11)
        if (startingMonth < 0) {
            startingMonth = 12 + startingMonth;
        }

        // Create an array to store the last 4 months
        var last4Months = [];

        // Loop through the last 4 months and add them to the array
        for (var i = 0; i < 4; i++) {
            // Calculate the month value based on the starting month and current iteration
            var monthValue = (startingMonth + i) % 12;

            // Add 1 to the month value to make it 1-based (1 - January, 2 - February, ...)
            monthValue += 1;

            // Add the month value to the array
            last4Months.push(monthValue);
        }

        // Output the last 4 months
        console.log(last4Months);

        for (let i = 0; i < last4Months.length; i++) {
            const month1 = await Duration.find({ userID: userID, month: last4Months });
        }




        let total_duration_month1 = []
        for (let index = 0; index < month1.length; index++) {

            console.log(">>>", month1[index].duration)
            total_duration_month1.push(month1[index].duration)

        }
        console.log("eee", total_duration_month1)
        let sum = total_duration_month1.reduce(function (a, b) {
            return a + b;
        });

        console.log("tot>>", sum)
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
        console.log(err)
        throw err;
    }
}

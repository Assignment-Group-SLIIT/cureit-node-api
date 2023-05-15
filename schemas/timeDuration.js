const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const duration = new Schema({

    userID: {
        type: String,
        maxLenght: 50,
        require: true
    },
    game: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
    },
    month: {
        type: Number,
    },
    timeStamp: {
        type: String,
    }

})


const Duration = mongoose.model("Duration", duration);
module.exports = Duration;
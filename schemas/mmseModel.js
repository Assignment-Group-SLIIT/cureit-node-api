const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mmse = new Schema({

    userID: {
        type: String,
        maxLenght: 50,
        require: true
    },

    mmseScore: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    timeStamp: {
        type: String,
    }

})


const MMSE = mongoose.model("MMSEMark", mmse);
module.exports = MMSE;
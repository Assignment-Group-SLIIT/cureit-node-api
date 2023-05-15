const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const game = new Schema({

    userID: {
        type: String,
        maxLenght: 50,
        require: true
    },
    game: {
        type: Number,
        required: true,
    },
    levelPlayed: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
    },
    timeStamp: {
        type: String,
    }

})


const Game = mongoose.model("Games", game);
module.exports = Game;
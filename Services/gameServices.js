const { response } = require("express");
const mongoose = require("mongoose");
const Game = require("../schemas/gameModel");

module.exports.addNewGameRecordService = async (req, res) => {
    console.log("req", req);
    try {

        const userID = req.userID;
        const game = req.game
        const levelPlayed = req.levelPlayed
        const duraton = req.duraton;
        const timeStamp = req.timeStamp;

        const newGameRecord = new Game({
            userID,
            game,
            levelPlayed,
            duraton,
            timeStamp,

        });

        const response = await newGameRecord.save();

        return {
            msg: "success",
            data: response,
        };
    } catch (err) {
        throw err;
    }
}


module.exports.viewGameRecordsService = async (req, res) => {
    console.log(req)
    try {
        const userID = req.userID;
        const game = req.game;

        const lastplayedGame = await Game.find({ userID: userID }).sort({ _id: -1 }).limit(1);

        const LastlayedPuzzelGame = await Game.find({ userID: userID, game: 1 }).sort({ _id: -1 }).limit(1);
        const LastlayedCardGame = await Game.find({ userID: userID, game: 2 }).sort({ _id: -1 }).limit(1);
        const LastlayedNumberGame = await Game.find({ userID: userID, game: 3 }).sort({ _id: -1 }).limit(1);
        const LastlayedNavGame = await Game.find({ userID: userID, game: 4 }).sort({ _id: -1 }).limit(1);

        const response = {
            lastplayedGame: lastplayedGame[0] ? lastplayedGame[0] : null,
            LastlayedPuzzelGame: LastlayedPuzzelGame[0] ? LastlayedPuzzelGame[0] : null,
            LastlayedCardGame: LastlayedCardGame[0] ? LastlayedCardGame[0] : null,
            LastlayedNumberGame: LastlayedNumberGame[0] ? LastlayedNumberGame[0] : null,
            LastlayedNavGame: LastlayedNavGame[0] ? LastlayedNumberGame[0] : null

        }

        console.log("res>>", response)

        if (response) {
            return {
                msg: "success",
                data: response,
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
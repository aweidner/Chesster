// NOTE: Neither of these files are committed and for good reason.
//       You must provide your own.
var token = require("./slack_token.js").token;
var private_key = require("./test_service_account_key.js").key;

var config = require("./config.js").config;
config["leagues"]["45+45"]["spreadsheet"]["key"] = "1BeRN76zaB_uCCrCra2yTEEw_r6C5_b8P59aN_BrJsyA";
config["leagues"]["45+45"]["spreadsheet"]["serviceAccountAuth"] = {
    "client_email": "tesster@chesster-lichess-4545-bot.iam.gserviceaccount.com",
    "private_key": private_key,
};
config["leagues"]["lonewolf"]["spreadsheet"]["key"] = "1xBofd1bFIB4OBUOErWqFWTjTc0dFuTf6WlHxZf3FbIU";
config["leagues"]["lonewolf"]["spreadsheet"]["serviceAccountAuth"] = {
    "client_email": "tesster@chesster-lichess-4545-bot.iam.gserviceaccount.com",
    "private_key": private_key,
};
config["leagues"]["45+45"]["scheduling"]["channel"] = "unstable_bot";
config["leagues"]["45+45"]["results"]["channel"] = "unstable_bot";
config["leagues"]["45+45"]["gamelinks"]["channel"] = "unstable_bot";
config["leagues"]["lonewolf"]["scheduling"]["channel"] = "unstable_bot-lonewolf";
config["leagues"]["lonewolf"]["results"]["channel"] = "unstable_bot-lonewolf";
config["leagues"]["lonewolf"]["gamelinks"]["channel"] = "unstable_bot-lonewolf";
module.exports.config = config;

const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
	{
		first_name: {
			type: String,
			required: true,
		},
		last_name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const Player = model("Player", playerSchema);

module.exports = Player;

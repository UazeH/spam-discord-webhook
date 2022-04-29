const { Webhook } = require('discord-webhook-node');
const request = require('request');
const wait = require('await-timeout');
const config = require("./config.json")

var prompt = require('prompt-sync')();

const webhookurl = config.webhooklink;

var message = prompt('Enter Message : ');
var totalspam = prompt('Enter Total of Message : ');
var delay = prompt('Input delay message (normal : 700) : ');

async function run() {

	for (let a = 0; a < totalspam; a++) {
		request({
			method: "POST",
			url: webhookurl,
			headers: {
				"Content-Type": "application/json"
			},
			json: {
				"content": ""+message+""
			}
		}, (err, res, body) => {
			if (err) console.error(err);
			else {
			console.log(`[`+a+`] Sending Webhook Text `+message+` with Total message `+totalspam+``)
			}
		});
		await wait.set(delay);
	}
}

run();
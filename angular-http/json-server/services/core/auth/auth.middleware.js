const express = require('express');
const router = express.Router();

module.exports = (server) => {

	router.post('/auth/login', (req, res) => {
		const { body } = req;

		console.log(body);
		let users = server.db.getState().users,
			matchedUser = users.find((user) => {
				const ret = user.login.toUpperCase() === body.login.toUpperCase();
				if (ret) console.log(user);
				return ret;
			});

		if (!matchedUser) {
			res.status(401).send('Wrong username');
		} else if (matchedUser.password === body.password) {
			res.json({ token: matchedUser.fakeToken });
		} else {
			res.status(401).send("Wrong password");
		}
	});

	router.get('/auth/userinfo', (req, res) => {
		let users = server.db.getState().users,
			matchedUser = users.find((user) => {
				console.log(user);
				return `Bearer ${user.fakeToken}` === req.header('Authorization');
			});

		if (!matchedUser) {
			res.status(401).send('Unauthorized');
		} else {
			res.json(matchedUser);
		}
	});

	return router;
};

const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet.hidePoweredBy());
app.use(
	helmet.frameguard({
		action: 'deny'
	})
);
app.use(helmet.xssFilter());
app.use(helmet.noSniff()); /*requires helmet v2.3.0*/
app.use(helmet.ieNoOpen());/*requires helmet v2.3.0*/

const ninetyDaysInSeconds = 90*24*60*60;
app.use(
	helmet.hsts({ /*requires helmet v3.2.0*/
		maxAge: ninetyDaysInSeconds,
		force: true
	})
);

app.use(helmet.dnsPrefetchControl()); /*requires helmet v2.3.0*/
app.use(helmet.noCache()); /*requires helmet v2.3.0*/
app.use(
	helmet.contentSecurityPolicy({ /*requires helmet v2.3.0*/
		directives: {
			defaultSrc: ["'self'"],
			scriptSrc: ["'self'", 'trusted-cdn.com']
		}
	})
);















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});

var http = require('http'); // needed to integrate with ws package for mock web socket server.
var express = require('express');
var app = express();
const serveStatic = require('serve-static');
var httpServer = http.createServer(app);

app.set('trust proxy', 1);

var port = process.env.VCAP_APP_PORT || 5000;
var appname = 'SASI UI';

const boot = (cb) => {
  console.info('Starting ui app...');

  httpServer.listen(port, () => {
    console.log(`${appname} started on port ${port}`);
    if (cb) {
      cb();
    }
  });

  httpServer.on('error', (err) => {
    console.error(err.stack);
  });
};

const shutdown = function (cb) {
  httpServer.close(cb);
  console.log(`${appname} shutdown`);
};

function setStaticAssetsCacheControl(res) {
  if (res.req.headers['Cache-Control'] || res.req.headers['cache-control']) {
    res.setHeader('Cache-Control', res.req.headers['Cache-Control'] || res.req.headers['cache-control']);
  }
}

/* Aggressively cache static assets in production
http://expressjs.com/en/advanced/best-practice-performance.html */

let staticServerConfig = {};

if (process.env.NODE_ENV === 'production') {
  staticServerConfig = {
    setHeaders: setStaticAssetsCacheControl
  };
}

app.use('/', serveStatic('dist', staticServerConfig));

app.get('/userinfo', function(req, res) {
  res.send({user_name: 'Sample User'});
});

if (require.main === module) {
  boot();
} else {
  console.info('Running sasi ui...');
  app.boot = boot;
  app.shutdown = shutdown;
  app.port = port;
}

module.exports = app;

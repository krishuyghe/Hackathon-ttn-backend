// Copyright © 2017 The Things Network
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

/* eslint-disable */

var settings = require("./settings.json");
var ttn = require("ttn");

var appID = settings.ttn.appID;
var accessKey = settings.ttn.accessKey;

ttn
  .data(appID, accessKey)
  .then(function(client) {
    client.on("uplink", function(devID, payload) {
      console.log("Received uplink from ", devID);
      console.log(payload);
      console.log("Program running");
    });
  })
  .catch(function(error) {
    console.error("Error", error);
    process.exit(1);
  });


  var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

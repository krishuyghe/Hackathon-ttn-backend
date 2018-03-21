// Copyright © 2017 The Things Network
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

/* eslint-disable */

var settings = require("./settings.json");
var ttn = require("ttn");
var http = require("http");
var request = require("request");

var appID = settings.ttn.appId;
var accessKey = settings.ttn.accessKey;


ttn
  .data(appID, accessKey)
  .then(function(client) {
    client.on("uplink", function(devID, payload) {
      console.log("Received uplink from ", devID);
      // console.log(payload.payload_fields);
      // console.log(payload.hardware_serial);
      
      console.log("Program running");

      body = payload.payload_fields
      body.dev_eui = payload.hardware_serial

      console.log(JSON.stringify(body));

      var options = {
        url:
        settings.http.http + "://" + settings.http.host + ":" + settings.http.port +  settings.http.path,
        method: "POST",
        json: true,
        body: body
      };
      request(options, function (error, response, body) {
        if (error) {
          return console.error('upload failed:', error);
        }
        console.log('Upload successful!');
      });
    });
  })
  .catch(function(error) {
    console.error("Error", error);
    process.exit(1);
  });


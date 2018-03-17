// Copyright © 2017 The Things Network
// Use of this source code is governed by the MIT license that can be found in the LICENSE file.

/* eslint-disable */

// var settings = require("./settings.json");
var ttn = require("ttn");
var http = require("http");
var request = require("request");

var appID =  process.env.TTN_APPID;
var accessKey =  process.env.TTN_ACCESSKEY;

// var api_url = "http://" + settings.http.host + ":" + settings.http.port +  settings.http.path;
var api_url = process.env.API_URL || "http://localhost:80/api"

ttn
  .data(appID, accessKey)
  .then(function(client) {
    client.on("uplink", function(devID, payload) {
      console.log("Received uplink from ", devID);
      console.log(payload.payload_fields);
      console.log("Program running");
      //my_payload = {};
      //my_payload.temperature = payload.payload_fields.celcius;
      //console.log(my_payload);

      var options = {
        url: api_url,
        method: "POST",
        json: true,
        body: payload.payload_fields
      };
      request(options, function(err,res,body){
        console.log('status: ' + res.statusCode);
      });
    });
  })
  .catch(function(error) {
    console.error("Error", error);
    process.exit(1);
  });

 
# TTN Listener

## inleiding

The sensor sends data to the TTN, the TTN wil be filtered and generate a JSON String.
This Json String will send with the integrated MQTT of The things network to the listener (this project).
This Json string wil send all the incoming data filtered to the HTTP

![roadmap](/pictures/roadmap.jpg)

## Installation

`git clone git@github.com:Projectwerk2-2018/smart-campus-ttn-backend.git`

Installing the dependencies:

`npm install`

## Configuration

Make a copy of the `settings.example.json` file and name it `settings.json`. This can be done with the following command as well: `cp settings.example.json settings.json`.

Then update the changes in the file according to your setup.

```javascript
{
	"ttn":{
		  "appId": "TEST",
		  "accessKey": "ttn-account-v2.TEST"
	  },
	  "http":{
			  "host": "localhost",
			  "port": 8000,
			  "path": "/"
	  }
} 

```

## Running the application

`node server.js`

or

`npm start`

## testing the application
set the localhost_test.js file in a new project.

run the project

`node localhost_test.js`

if the hardware is online you will have automaticly respons 

other whise you can *simulate uplink*

test with payload `00D71B0049`

![payload](/pictures/payload.png)

# referenties


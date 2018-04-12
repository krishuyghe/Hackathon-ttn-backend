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

Make a copy of the `.env.example` file and name it `.env`. This can be done with the following command as well: `cp .env.example .env`.

Then update the changes in the file according to your setup.

```bash
TTN_APPID=
TTN_ACCESSKEY=ttn-account-v2.

HTTP_HOST=localhost
HTTP_PORT=8000
HTTP_PATH=/
HTTP_HTTP=http
```

Or you can change the setting in your terminal:

`TTN_APPID=test TTN_ACCESSKEY=ttn-account-v2 HTTP_HOST... node server.js`

## Running the application

`node server.js`

or

`npm start`

## testing the application

set the localhost_test.js file in a new project.

run the project

`node localhost_test.js`

if the hardware is online you will have automaticly respons

other whise you can _simulate uplink_

test with payload `00D71B0049`

![payload](/pictures/payload.png)

this wil send `{"humidity":109,"movement":125,"temperature":11.7,"dev_eui":"00D9E55A84BCE66B"}` to the Listiner. End to the backand

# dockerizing 


build your **Docker image**

`docker build -t <name>/listener .`

test of the images has been build

`docker image ls`

now you can run the application 

`docker run -p 4000:80 <name>/listener`

# referenties

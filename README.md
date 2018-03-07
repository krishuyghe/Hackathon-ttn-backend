# TTN Listener 

## inleiding
connect to the mqtt of TTN, cleans up data. (remove metadata)

Sensor sends data to the TT Networks, in the 

![map](/pictures/map.png)

## agendapunten
SIMULATIE => HTTP

 1. recieve fake data from ttn to server.js 

 sending fake data and recieve it in the console.
 to start the console: `node server.js`

 2. setting.json file aanmaken and ignore on github

yo need a .gitignore file to not publisch you accas key and id

3. decode incoming massage and retrieve payloud.

the default uplink is:  
```shell
{ app_id: 'TEST',
  dev_id: 'fake_device',
  hardware_serial: 'TEST',
  port: 1,
  counter: 0,
  payload_raw: <Buffer aa>,
  metadata: { time: '2018-03-07T09:15:37.47879368Z' } }
```
you need to collect only the payload_raw data.

```
{payload_raw: <Buffer aa>}
```

3. Convert the payload_data to a Json file than can be include in the backand.
- talk to Steve Trap to know what he needs as input.
- talk to the electornic peaple to know what data will come in. 

4. send you incoming data to the backand
- talk to Steve Trap how to do this the best way. 

5. LoRaWan downlink. vanaf backand terug naar TTN

# referenties
https://github.com/TheThingsNetwork/node-app-sdk/blob/master/examples/es5/data.js








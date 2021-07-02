// index.js
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('Returned IP:' , ip);

//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log(error);
//       return
//     }
//     console.log('Coordinates:', data);
//     fetchISSFlyOverTimes(data, (error, times) => {
//       if (error) {
//         console.log(error);
//         return
//       }
//       console.log('Flyover times:', times);
//     });
//   });
// });


// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('Returned IP:' , ip);

  fetchCoordsByIP(ip, (error, data) => {
    if (error) {
      console.log(error);
      return
    }
    console.log('Coordinates:', data);
    fetchISSFlyOverTimes(data, (error, times) => {
      if (error) {
        console.log(error);
        return
      }
      console.log('Flyover times:', times);
    });
  });
});



import { APIkey } from "../../constants.js";

// this is a subfunction that is called in the event that city is correct but the country incorrect
const getCurrentByCityOnly = city => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        APIkey
    ).then(res => {
      resolve(res.text());
    });
  });
};

// this function is initially called to fetch the weather data by city and country name
const getCurrentByCity = (city, country) => {
  return new Promise((resolve, reject) => {
    let locationQuery = city + "," + country;
    if (locationQuery[locationQuery.length - 1] === ",") {
      locationQuery = locationQuery.slice(0, locationQuery.length - 1);
    }
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        locationQuery +
        "&appid=" +
        APIkey
    )
      .then(res => {
        if (res.status !== "200") {
          return getCurrentByCityOnly(city);
        }
        return res.text();
      })
      .then(resBody => {
        let parsedRes = JSON.parse(resBody);
        resolve(parsedRes);
      });
  });
};

export default getCurrentByCity;

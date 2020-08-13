const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonEachPerYear = require("./ipl/matchesWonEachPerYear");
const extraRunsConcededByEach = require("./ipl/extraRunsConcededByEach");
const economyBowlers = require("./ipl/economyBowlers");
const matchesStory = require("./ipl/matchesStory");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_SECOND = "./public/data_second.json";
const JSON_OUTPUT_FILE_PATH_THIRD = "./public/data_third.json";
const JSON_OUTPUT_FILE_PATH_FOUR = "./public/data_four.json";
const JSON_OUTPUT_FILE_PATH_FIFTH = "./public/data_fifth.json";

function main() 
{
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          let result = matchesPlayedPerYear(matches);
          saveMatchesPlayedPerYear(result);

          let result2 = matchesWonEachPerYear(matches);
          // console.log(result2);
          savematchesWonEachPerYear(result2);

          let result3 = extraRunsConcededByEach(deliveries);
          saveextraRunsConcededByEach(result3);
          // console.log(result3);

          let result4 = economyBowlers(matches, deliveries)
          saveeconomyBowlers(result4);

          let result5 = matchesStory(matches);
          savematchesStory(result5);
          // console.log(result5);
      })
    });
}


// 1st
function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


// 2nd
function savematchesWonEachPerYear(result2) {
  const jsonData = {
    matchesWonEachPerYear: result2
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_SECOND, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
// 3rd
function saveextraRunsConcededByEach(result3) {
  const jsonData = {
    extraRunsConcededByEach: result3
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_THIRD, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


// 4th
function saveeconomyBowlers(result4) 
{
    const jsonData = {
      economyBowlers: result4
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH_FOUR, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
}

// 5th
function savematchesStory(result5) 
{
    const jsonData = {
      matchesStory: result5
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH_FIFTH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
}

main();
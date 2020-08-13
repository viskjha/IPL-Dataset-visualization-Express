const fs = require("fs");
const csv = require("csvtojson");
// const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
// const extraRunsConcededByEach = require("./ipl/extrarunsconcededbyeach");
// const matcheswoneachperyear = require("./ipl/matcheswoneachperyear");
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
            let result4 = economyBowlers(matches, deliveries)
            saveeconomyBowlers(result4);
            let result5 = matchesStory(matches);
            savematchesStory(result5);
            // console.log(result5);
      })
    });
}


// 1st
// 2nd
// 3rd
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
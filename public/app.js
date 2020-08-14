// 1st start
function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  // console.log(seriesData);

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}
// 1st end




// 2nd start
function fetchAndVisualizeData2() {
  fetch("./data_second.json")
    .then(r => r.json())
    .then(visualizeData2);
}

fetchAndVisualizeData2();

function visualizeData2(data) {
  visualizeMatchesWonByEachTeam(data.matchesWonEachPerYear);
  return;
}

function visualizeMatchesWonByEachTeam(data)
{
  // console.log(data);
    const series = []
    let year = Object.keys(data)
    const team = []
    for(let i=0;i<year.length;i++)
    {    
      team.push(Object.keys(data[year[i]]))
    }
    const teams=[...new Set([].concat.apply([], team))]
    //console.log(teams)
    for(let i in teams)
    {
      let total=[]
      for(let j in year)
      {
        if(data[year[j]].hasOwnProperty(teams[i]))
        {
          total.push(data[year[j]][teams[i]])
        }
        else{
          total.push(0)
        }
      }
      series.push({name: teams[i], data: total})
    }
    //console.log(series)
    //return series

    Highcharts.chart('matches-won-by-each-team', {
      chart: {
          type: 'column'
      },
      title: {
          text: '2. Number of matches won by each team over all the years of IPL'
      },
      xAxis: {
          categories: year,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Matches won'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: series
    });
}
// 2nd end




// 3rd start
// For the year 2016, plot the extra runs conceded by each team.
function fetchAndVisualizeData3() {
  fetch("./data_third.json")
    .then(r => r.json())
    .then(visualizeData3);
}

fetchAndVisualizeData3();

function visualizeData3(datathird) {
  visualizeextrarunsconcededbyeach(datathird.extraRunsConcededByEach);
  return;
}

function visualizeextrarunsconcededbyeach(extraRunsConcededByEach) {
  const seriesDataThird = [];
  for (let extra in extraRunsConcededByEach) {
    seriesDataThird.push([extra, extraRunsConcededByEach[extra]]);
  }

  // console.log(seriesDataThird);

  Highcharts.chart('extra-runs-conceded-by-each-2016', {
    chart: {
        type: 'column'
    },
    title: {
        text: '3. Extra Runs Conceded by Each Team in 2016'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Extra Runs'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Extra Run in 2016: <b>{point.y}</b>'
    },
    series: [{
        name: 'Extra Run',
        data: seriesDataThird,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  });

}
// 3rd end


// 4th start
let year
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  year = form.elements.year.value
  //console.log(form.elements.year.value)
  e.preventDefault()
  fetch(`/economy?year=${year}`)
    .then(data => data.json())
    .then(visualizeData4)
})

function visualizeData4(data)
{
  document.querySelector("#economy-bowlers").innerHTML="", visualizeEconomyBowlers(data, year)
  return;
}

function visualizeEconomyBowlers(data, year)
{
  Highcharts.chart("economy-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: `4. Top 10 economical bowlers of ${year}`
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [
      {
        name: "Economy",
        data: data
      }
    ]
  });
}
// 4th end



// 5th start
// Discuss a "Story" you want to tell with the given data.
function fetchAndVisualizeData5() {
  fetch("./data_fifth.json")
    .then(r => r.json())
    .then(visualizeData5);
}

fetchAndVisualizeData5();

function visualizeData5(datafifth) {
  visualizematchesStory(datafifth.matchesStory);
  return;
}

function visualizematchesStory(matchesStory) {
  const seriesDataFifth = [];
  for (let sto in matchesStory) {
    seriesDataFifth.push([sto, matchesStory[sto]]);
  }

  // console.log(seriesDataFifth);

  Highcharts.chart('matches-story', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '5. Win by all the Teams'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: seriesDataFifth
    }]
  });
}
// 5th end

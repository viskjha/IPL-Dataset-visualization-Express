// 1st start
// 1st end


// 2nd start
// 2nd end

// 3rd start
// 3rd end


// 4th start
var year
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
      text: `Top 10 economical bowlers of ${year}`
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

function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) 
{
  visualizeEconomyBowlers(data.economyBowlers[2015])
  return;
}

var year
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  year = form.elements.year.value
  //console.log(form.elements.year.value)
  e.preventDefault()
  fetch(`/economy?year=${year}`)
    .then(data => data.json())
    .then(visualizeCustomData)
})

// var year
// const form = document.querySelector('form')
// form.addEventListener('submit', (e)=>{
//   year = form.elements.year.value
//   //console.log(form.elements.year.value)
//   e.preventDefault()
//   fetch("./data.json")
//     .then(data => data.json())
//     .then(visualizeCustomData)
// })  data.economyBowlers[year], year

function visualizeCustomData(data)
{
  document.querySelector("#custom-economy-bowlers").innerHTML="", visualizeCustomEconomyBowlers(data, year)
  return;
}

function visualizeCustomEconomyBowlers(data, year)
{
  Highcharts.chart("custom-economy-bowlers", {
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





function visualizeEconomyBowlers(data)
{
  Highcharts.chart("economy-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 10 economical bowlers of 2015"
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


google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Paper' ],
    ['2015', 1],
    ['2016', 2],
    ['2017', 2],
    ['2018', 1],
    ['2019', 1],
    ['2020', 3],
    ['2021', 2],
    ['2022', 3],
    ['2023', 2],
    ['2024', 7],
    ['2025', 7],
    ['2026', 5],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],	
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0]
  ]);

  var options = {
    width: '100%',
    legend: 'none',
    bar: { groupWidth: "100%" },
    colors: ['#77C3EC'],
  
    vAxis: {
      textPosition: 'none',   // removes numbers (labels)
      gridlines: { color: 'transparent' }, // removes gridlines
      baselineColor: 'transparent' // removes axis line
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div'));

  chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Paper' ],
    ['2015', 1],
    [' ', 2],
    [' ', 2],
    [' ', 1],
    [' ', 1],
    [' ', 3],
    [' ', 2],
    [' ', 3],
    [' ', 2],
    [' ', 4],
    ['2025', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],	
    [' ', 0],
    [' ', 0],
    [' ', 0],
    ['2035', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    ['2045', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    [' ', 0],
    ['2055', 0]
  ]);

  var options = {
    legend: 'none',
    bar: {groupWidth: "100%"},
    colors: ['#77C3EC'],
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div'));

  chart.draw(data, options);
}

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
    [' ', 0],
    [' ', 0],
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
    ['  ', 0]
  ]);

  var options = {
    legend: 'none',
    title: 'Publication each year',
    bar: {groupWidth: "95%"},
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div'));

  chart.draw(data, options);
}

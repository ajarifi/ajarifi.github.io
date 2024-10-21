google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'talk' ],
    ['2015', 4],
    [' ', 3],
    [' ', 8],
    [' ', 6],
    [' ', 7],
    [' ', 9],
    [' ', 19],
    [' ', 12],
    [' ', 10],
    [' ', 13],
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
    colors: ['#EC7777'],
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div_talk'));

  chart.draw(data, options);
}

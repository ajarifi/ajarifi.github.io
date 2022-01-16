google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
          ['Type', 'Number'],
          ['Phys.Rev.D',   5],
          ['Phys.Rev.D (Lett)', 1]
        ]);

  // Instantiate and draw the chart.
  var chart = new google.visualization.PieChart(document.getElementById('myPieChart2'));
  chart.draw(data, null);
}

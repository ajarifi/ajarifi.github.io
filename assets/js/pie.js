google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
          ['Type', 'Number'],
          ['Article',   6],
          ['Proceeding', 5],
          ['Thesis',  1]
        ]);
  var options = {
    legend: 'none',
    pieSliceText: 'label',
    title: 'Publication type',
  };

  // Instantiate and draw the chart.
  var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
  chart.draw(data, null);
}

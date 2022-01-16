google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

			var data = google.visualization.arrayToDataTable([
         ['Year', 'Paper' ],
         ['15', 1],
         ['16', 2],
         ['17', 2],
         ['18', 1 ],
         ['19', 1 ],
         ['20', 3],
         ['21', 2],
         ['22', 0],
         ['23', 0],
         ['24', 0],
         ['25', 0],
         ['26', 0],
      ]);

      var options = {
      	legend: 'none',
        title: 'Publication (from 2015)'
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }

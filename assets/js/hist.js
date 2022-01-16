google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

			var data = google.visualization.arrayToDataTable([
         ['Year', 'Paper' ],
         ['Y15', 1],
         ['Y16', 2],
         ['Y17', 2],
         ['Y18', 1 ],
         ['Y19', 1 ],
         ['Y20', 3],
         ['Y21', 2],
         ['Y22', 0],
         ['Y23', 0],
         ['Y24', 0],
         ['Y25', 0],
         ['Y26', 0],
      ]);

      var options = {
      	legend: 'none',
        title: 'Publication each year'
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }

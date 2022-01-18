google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

			var data = google.visualization.arrayToDataTable([
         ['Year', 'Paper' ],
         ['Y15', 1],
         ['Y16', 2],
         ['Y17', 2],
         ['Y18', 1],
         ['Y19', 1],
         ['Y20', 3],
         ['Y21', 2],
         ['Y22', 0],
         ['Y23', 0],
         ['Y24', 0],
         ['Y25', 0],
         ['Y26', 0],
         ['Y27', 0],
         ['Y28', 0],
         ['Y29', 0],
         ['Y30', 0],
         ['Y31', 0],	
         ['Y32', 0],
         ['Y33', 0],
         ['Y34', 0],
         ['Y35', 0],
         ['Y36', 0],
         ['Y37', 0],
         ['Y38', 0],
         ['Y39', 0],
         ['Y40', 0],
      ]);

      var options = {
      	legend: 'none',
        title: 'Publication each year'
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }

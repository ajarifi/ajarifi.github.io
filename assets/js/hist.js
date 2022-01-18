google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

			var data = google.visualization.arrayToDataTable([
         ['Year', 'Paper' ],
         ['Y15', 1],
         [' ', 2],
         [' ', 2],
         [' ', 1],
         [' ', 1],
         ['Y20', 3],
         [' ', 2],
         [' ', 0],
         [' ', 0],
         [' ', 0],
         ['Y25', 0],
         [' ', 0],
         [' ', 0],
         [' ', 0],
         [' ', 0],
         ['Y30', 0],
         [' ', 0],	
         [' ', 0],
         [' ', 0],
         [' ', 0],
         ['Y35', 0],
         [' ', 0],
         [' ', 0],
         [' ', 0],
         [' ', 0],
         ['Y40', 0],
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

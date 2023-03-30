google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

			var data = google.visualization.arrayToDataTable([
         ['Year', 'Paper' ],
         ['15', 1],
         [' ', 2],
         [' ', 2],
         [' ', 1],
         [' ', 1],
         ['20', 3],
         [' ', 2],
         [' ', 3],
         [' ', 1],
         [' ', 0],
         ['25', 0],
         [' ', 0],
         [' ', 0],
         [' ', 0],
         [' ', 0],
         ['30', 0],
         [' ', 0],	
         [' ', 0],
         [' ', 0],
         [' ', 0],
         ['35', 0],
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

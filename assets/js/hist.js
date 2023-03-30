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
         ['21', 2],
         ['22', 3],
         ['23', 1],
         ['24', 0],
         ['25', 0],
         ['26', 0],
         ['27', 0],
         ['28', 0],
         ['29', 0],
         ['30', 0],
         ['31', 0],	
         ['32', 0],
         ['33', 0],
         ['34', 0],
         ['35', 0],
         ['36', 0],
         ['37', 0],
         ['38', 0],
         ['39', 0],
         ['40', 0]
      ]);

      var options = {
      	legend: 'none',
        title: 'Publication each year',
	bar: {groupWidth: "95%"},
	hAxis: {
	  ticks: [20,25,30,35]
	},
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }

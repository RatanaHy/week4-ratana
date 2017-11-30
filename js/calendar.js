var calendar = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>Th</th><th>F</th><th>S</th></tr>",
	displayCalendar: function(){
		var ele = document.getElementById("calendar");
		var calendarText = "<table class ='table table-condensed'>";
		calendarText += this.header;
		calendarText = calendarText + "<tr>";
		for( var i = 1; i <=31; i++){
			// console.log(i);
			
			if((i-1) % 7 == 0){
				calendarText = calendarText + "</tr><tr>";
			}
			calendarText = calendarText + "<td>" + i + "</td>";	

		}
		calendarText = calendarText + "</tr>";
		calendarText += "</table>"
		ele.innerHTML = calendarText;
	}
}
calendar.displayCalendar();

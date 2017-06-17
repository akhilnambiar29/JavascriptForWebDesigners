(function(){
'use strict';

	document.addEventListener('DOMContentLoaded',function(){
		var c = document.getElementById('current-time');

		var currentDate = new Date();
		var date = document.getElementById('current-date');
		date.innerHTML = format(currentDate.getMonth()) + ' ' + currentDate.getDate();

		function format(dateValue){
			var monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',];
			return monthList[dateValue];
		}
		

		setInterval(getTimeInterval,1000);

		function getTimeInterval(){

			var d = new Date();


			var hours = d.getHours();

			var minutes = d.getMinutes();

			if(minutes<10){
				minutes = '0'+minutes;
			}
			var ampm = 'AM';
			if(hours>12){
				hours -=12;
				ampm = 'PM';
			}
			else if(hours === 0){
				hours = 12;
			}

			var seconds = d.getSeconds() ;
			var seperator = ':';
			if(seconds%2 === 0){
				seperator = ' ';
			}
			c.innerHTML = hours + '<span>'+ seperator + '</span>'+ minutes + ' '+ ampm;
		}
		
		});

})();
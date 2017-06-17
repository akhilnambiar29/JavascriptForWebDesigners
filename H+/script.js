(function() {
"use strict";
	
	var state = document.getElementById('s-state');
	document.getElementById('cart-hplus').addEventListener('submit',estimateTotal);

	document.addEventListener('DOMContentLoaded',function(){
		
		var btnEstimate = document.getElementById('btn-estimate');

		btnEstimate.disabled = (state.value === '');

		state.addEventListener('change',function(){
		/*	if(state.value === ''){
			btnEstimate.disabled = true;
		}
		else{
			btnEstimate.disabled = false;
		}*/

		btnEstimate.disabled = (state.value === '');
		});
		
	});

	function estimateTotal(event){
		event.preventDefault();

		var bball = document.getElementById('txt-q-bball').value,
			jersey = document.getElementById('txt-q-jersey').value,
			power = document.getElementById('txt-q-power').value,
			water = document.getElementById('txt-q-water').value,
			sstate = document.getElementById('s-state').value,
			pickup = document.querySelector('input[name=r_method]:checked').value;

			console.log(bball,jersey,power,sstate,pickup,water);

			var itemQty = Number(bball) + Number(jersey) + Number(power) + Number(water);
			console.log(itemQty);
			var handling = 0;
			if(pickup == 'usps'){
					handling = itemQty * 2;
			}
			else if(pickup == 'ups'){
				handling = itemQty * 3;
			}

			var estimate = (bball * 90) + (jersey * 25) + (power * 30) + (water * 4)+ handling;

			var taxFactor = 1;
			if(sstate == 'CA'){
				taxFactor = 1.075;
			}
			if(sstate == 'WN'){
				taxFactor = 1.065;
			}

			estimate = estimate * taxFactor;

			document.getElementById('txt-estimate').value = '$'+estimate.toFixed(2);

			var results = document.getElementById('results');

			results.innerHTML = 'Total Items : ' + itemQty + '<br>';
			results.innerHTML += 'Shipping cost : $' + handling + '<br>';
			results.innerHTML += 'Tax : ' + ((taxFactor-1)*100).toFixed(2) + '%' + '(' + sstate+ ')';

		//console.log("You have submitted the form.");
		/*if(state.value === ''){
				alert('Please select shipping state');
				state.focus();
		}*/


	}
	
})();
/* http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

*/
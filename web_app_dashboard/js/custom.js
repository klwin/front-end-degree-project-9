
$(document).ready(function(){

	/* ---- Random User Profile Generator ---- */

    $.ajax({
	  url: 'https://randomuser.me/api/?nat=us&results=5&inc=name,picture,email',
	  dataType: 'json',
	  success: function(data) {
	    console.log(data.results);

	    let profilePicEL = document.getElementById('profilePic');
	    profilePicEL.innerHTML = "<img class=\"profile-pic\" src=\"" + data.results[0].picture.thumbnail + "\" width=\'50px\' height=\'50px\'>";

	    let profileNameEL = document.getElementById('profileName');
	    profileNameEL.innerHTML = "<span class=\'profileName\'>" + data.results[0].name.first + " " + data.results[0].name.last + "</span>";

	    function generateNewProfile(pic, name, email, i) {
			    const profilePicEl = document.getElementById(pic);
				profilePicEl.innerHTML = "<img class=\"profile-pic\" src=\"" + data.results[i].picture.thumbnail + "\" width=\'50px\' height=\'50px\'>";
				const profileNameEl = document.getElementById(name);
				profileNameEl.innerHTML = "<span class=\'profileName\'>" + data.results[i].name.first + " " + data.results[i].name.last + "</span>";
				const profileEmailEl = document.getElementById(email);
				profileEmailEl.innerHTML = data.results[i].email;

		}

		function generateRecentProfile(pic, name, i, message) {
			    const profilePicEl = document.getElementById(pic);
				profilePicEl.innerHTML = "<img class=\"profile-pic\" src=\"" + data.results[i].picture.thumbnail + "\" width=\'50px\' height=\'50px\'>";
				const profileNameEl = document.getElementById(name);
				profileNameEl.innerHTML = "<span class=\'profileName\'>" + data.results[i].name.first + " " + data.results[i].name.last + "</span> " + message;
		}

		// New Members
		generateNewProfile('profilePic2', 'profileName2', 'profileEmail2', '1');
		generateNewProfile('profilePic3', 'profileName3', 'profileEmail3', '2');
		generateNewProfile('profilePic4', 'profileName4', 'profileEmail4', '3');
		generateNewProfile('profilePic5', 'profileName5', 'profileEmail5', '4');


		//Recent Activity

		generateRecentProfile('recentPic2', 'recentName2', '1', 'commented on YourApp\' SEO tips');
		generateRecentProfile('recentPic3', 'recentName3', '2', 'like the post Facebook\'s changes for 2016');
		generateRecentProfile('recentPic4', 'recentName4', '3', 'commented on Facebook\'s changes for 2016');
		generateRecentProfile('recentPic5', 'recentName5', '4', 'posted YourApp\'s SEO tips');


	  }
	});

	/* ---- Close the alert ---- */

	const closeAlertEl = document.getElementById('close-button');
	closeAlertEl.addEventListener('click', () => {
		closeAlertEl.parentElement.style.display = "none";
	});

	const submitAlertEl = document.getElementById('close-button-submit');
	submitAlertEl.addEventListener('click', () => {
		submitAlertEl.parentElement.style.display = "none";
	});

	const submitFailAlertEl = document.getElementById('close-button-submit-fail');
	submitFailAlertEl.addEventListener('click', () => {
		submitFailAlertEl.parentElement.style.display = "none";
	});

	/* ---- Notification alerts ---- */

	$('.bell-container').on('click', () => {
		if($('#dropdown-content').hasClass('hidden')) {
			$('#dropdown-content').show();
			$('#dropdown-content').toggleClass('hidden shown');
		} else {
			$('#dropdown-content').hide();
			$('#dropdown-content').toggleClass('shown hidden');
		}
	});


	/* ---- Forum ---- */

	const nameEl = document.getElementById('name');
	const messageEl = document.getElementById('message');

	const submitSuccessEl = document.getElementById('alert-submit');
	const submitFailEl = document.getElementById('alert-submit-fail');

	$('input[type="submit"]').on('click', (e) => {
		e.preventDefault();
		if(nameEl.value == "" || messageEl.value == "") {
			submitFailEl.style.display = "inherit";
			$('#alert-submit-fail').delay(3000).fadeOut("slow");
		}
		else {
			submitSuccessEl.style.display = "inherit";
			$('#alert-submit').delay(3000).fadeOut("slow");
		}
	});

	/* ---- Random Number Generators ---- */

	function generate0to2500() {
		let randomNumber = Math.floor(Math.random() * 2501);
		return randomNumber;
	}

	function generate0to200() {
		let randomNumber = Math.floor(Math.random() * 201);
		return randomNumber;
	}

	function generate0to25() {
		let randomNumber = Math.floor(Math.random() * 26);
		return randomNumber;
	}

	/* ---- Traffic Chart---- */

		var trafficChart = document.getElementById("traffic").getContext('2d');
		function trafficCharts() {
			var chartOne = new Chart(trafficChart, {
			    type: 'line',
			    data: {
			        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
			        datasets: [{
			            label: '# of visits',
			            data: [generate0to2500(), generate0to2500(), generate0to2500(), generate0to2500(), generate0to2500(), 
			            generate0to2500(), generate0to2500(), generate0to2500(), generate0to2500(), generate0to2500(), 
			            generate0to2500(), generate0to2500(), generate0to2500()],
			            backgroundColor: 'rgba(116, 119, 191, 0.2)',
			            borderColor: [
			                'rgba(77, 76, 114, 1)',
			                'rgba(54, 162, 235, 1)'

			            ],
			            borderWidth: 1,
			            pointBorderWidth: 3,
			            pointRadius: 8,
			            pointBackgroundColor: 'rgba(255, 255, 255, 0.8)',
			            lineTension: 0
			        }]
			    },
			    options: {
			      legend: {
			        display: false
			        },
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
			    }
			});
		}
		trafficCharts();

	// Toggle selected class
	function switchClass() {
		$('.selected').first().removeClass('selected');
	}

	$('#hourly').on('click', () => {
		if(!($('#hourly').hasClass('selected'))) {
			switchClass();
			$('#hourly').addClass('selected');
			trafficCharts();
		}
	});

	$('#weekly').on('click', () => {
		if(!($('#weekly').hasClass('selected'))) {
			switchClass();
			$('#weekly').addClass('selected');
			trafficCharts();
		}
	});

	$('#daily').on('click', () => {
		if(!($('#daily').hasClass('selected'))) {
			switchClass();
			$('#daily').addClass('selected');
			trafficCharts();
		}
	});

	$('#monthly').on('click', () => {
		if(!($('#monthly').hasClass('selected'))) {
			switchClass();
			$('#monthly').addClass('selected');
			trafficCharts();
		}
	});



	/* ---- Daily Traffic Chart ---- */
		var dailyTrafficChart = document.getElementById("dailyTraffic").getContext('2d');
		var charTwo = new Chart(dailyTrafficChart, {
		    type: 'bar',
		    data: {
		        labels: ["S", "M", "T", "W", "T", "F", "S"],
		        datasets: [{
		            label: '# of daily users',
		            data: [generate0to200(), generate0to200(), generate0to200(), generate0to200(), generate0to200(), 
		            generate0to200(), generate0to200()],
		            backgroundColor: [
		                'rgba(116, 119, 191, 1)',
		                'rgba(116, 119, 191, 1)',
		                'rgba(116, 119, 191, 1)',
		                'rgba(116, 119, 191, 1)',
		                'rgba(116, 119, 191, 1)',
		                'rgba(116, 119, 191, 1)',
		                'rgba(116, 119, 191, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		      legend: {
		        display: false
		        },
		        scales: {
		            yAxes: [{

		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

	/* ---- Mobile Users Chart ---- */

	var mobileUsersChart = document.getElementById("mobileUsers").getContext('2d');
	var chartThree = new Chart(mobileUsersChart, {
	    type: 'doughnut',
	    data: {
	        labels: ["Phones", "Tablets", "Desktop"],
	        datasets: [{
	            label: '# of Votes',
	            data: [generate0to25(), generate0to25(), generate0to25()],
	            backgroundColor: [
	                'rgba(116, 119, 191, 1)',
	                'rgba(77, 76, 114, 1)',
	                'rgba(129,201,143, 1)'
	            ],
	            borderColor: [
	                'rgba(116, 119, 191, 1)',
	                'rgba(77, 76, 114, 1)',
	                'rgba(129,201,143, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	      legend: {
	        position: "right"
	        },
	        scales: {
	          xAxes: [{
	              display: false,
	              gridLines: false
	            }],
	            yAxes: [{
	                display: false,
	                gridLines: false,
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});

	/* ---- Social Status Follower Counts ---- */

	const tFollowerEL = document.getElementById('t-followers');
	tFollowerEL.innerHTML = generate0to2500();

	const fFollowerEl = document.getElementById('f-followers');
	fFollowerEl.innerHTML = generate0to2500();

	const gFollowerEl = document.getElementById('g-followers');
	gFollowerEl.innerHTML = generate0to2500();

	/* ---- Forum Search Autocomplete ---- */

	var alreadyFilled = false;
	var names = ["John", "Robert", "Michael", "David", "Richard", "Charles", "Thomas",
	"Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria"];

	function initDialog() {
        clearDialog();
        for (var i = 0; i < names.length; i++) {
            $('.dialog').append('<div>' + names[i] + '</div>');
        }
    }
    function clearDialog() {
    	$('.dialog').empty();
    }
    $('.autocomplete input').click(function() {
        if (!alreadyFilled) {
            $('.dialog').addClass('open');
        }
    });
    $('body').on('click', '.dialog > div', function() {
        $('.autocomplete input').val($(this).text()).focus();
        $('.autocomplete .close').addClass('visible');
        alreadyFilled = true;
    });
    $('.autocomplete .close').click(function() {
        alreadyFilled = false;
        $('.dialog').addClass('open');
        $('.autocomplete input').val('').focus();
        $(this).removeClass('visible');
    });
    function match(str) {
        str = str.toLowerCase();
        clearDialog();
        for (var i = 0; i < names.length; i++) {
            if (names[i].toLowerCase().startsWith(str)) {
                $('.dialog').append('<div>' + names[i] + '</div>');
            }
        }
    }
    $('.autocomplete input').on('input', function() {
        $('.dialog').addClass('open');
        alreadyFilled = false;
        match($(this).val());
    });
    $('body').click(function(e) {
        if (!$(e.target).is("input, .close")) {
            $('.dialog').removeClass('open');
        }
    });
    initDialog();
});

    /*--- Local storage of settings ---*/

    function save(){
	    const checkbox = document.getElementById('emailNotification');
	    localStorage.setItem('emailNotification', checkbox.checked);
	    const checkbox2 = document.getElementById('publicProfile');
	    localStorage.setItem('publicProfile', checkbox2.checked);
	    const timeLocation = document.getElementById('timezone');
	    localStorage.setItem('timezone', timeLocation.value);
	}

	function load(){    
	    const checked = JSON.parse(localStorage.getItem('emailNotification'));
	    document.getElementById('emailNotification').checked = checked;
	    const checked2 = JSON.parse(localStorage.getItem('publicProfile'));
	    document.getElementById('publicProfile').checked = checked2;
		const selected = JSON.parse(localStorage.getItem('timezone'));
		if (selected) {
		    document.getElementById('timezone').value = selected; 
		} else {
			document.getElementById('timezone').value = 'timezone';
		}
	}

	function wis(){
	    location.reload();
	    localStorage.clear()

	}

	load();




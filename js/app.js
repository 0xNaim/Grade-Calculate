const submitBtn = document.getElementById('submit-btn').addEventListener('click', function () {
	// value access
	let accounting = document.getElementById('accounting').value;
	let am = parseInt(accounting);
	let management = document.getElementById('management').value;
	let marketing = document.getElementById('marketing').value;
	let finance = document.getElementById('finance').value;
	let grade = '';

	let totalGrades = parseInt(accounting) + parseInt(management) + parseInt(marketing) + parseInt(finance);

	if (accounting < 0 || management < 0 || marketing < 0 || finance < 0) {
		alert('Please enter valid marks');
		return;
	}

	// percentage calculate
	const percentage = (totalGrades / 400) * 100;

	// grade check
	if (percentage <= 100 && percentage >= 80) {
		grade = 'A';
	} else if (percentage <= 79 && percentage >= 60) {
		grade = 'B';
	} else if (percentage <= 59 && percentage >= 40) {
		grade = 'C';
	} else {
		grade = 'F';
	}

	if (percentage >= 39.5) {
		document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grade}. You are Pass.`;
	} else {
		document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grade}. You are Fail`;
	}
});

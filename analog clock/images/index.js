setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hourhand.style.transform = `rotate(${hr_rotation}deg)`;
	minutehand.style.transform = `rotate(${min_rotation}deg)`;
	secondhand.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

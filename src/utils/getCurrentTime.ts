export function getCurrentTime() {
	const curDate = new Date();

	const curTime = curDate.toString().match(/\d{3}\s(.+)\sGMT/)?.[1];
	const curMiliseconds = curDate.getMilliseconds().toString().padEnd(3, '0');

	return `${curTime}.${curMiliseconds}`;
}

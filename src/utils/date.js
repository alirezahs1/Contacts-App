export const millisecondsToDateStr = (milliseconds) => {
	const date = new Date(milliseconds);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return `${year}-${month}-${day}`;
}
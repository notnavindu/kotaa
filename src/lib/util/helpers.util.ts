export const sortAlpha = (a: string, b: string) => {
	if (a < b) return -1;
	else if (a > b) return 1;
	return 0;
};

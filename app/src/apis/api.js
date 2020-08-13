export const getData = async () => {
	try {
		const response = await fetch("https://d5a5ce43-e7e0-44fc-9a4c-5158e9f33244.mock.pstmn.io/api/v1/menu");
		return response.json();
	} catch (e) {
		console.error(e);
	}
};

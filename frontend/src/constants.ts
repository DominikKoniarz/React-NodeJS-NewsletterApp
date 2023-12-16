const BASE_URL = import.meta.env.PROD
	? import.meta.env.VITE_SERVER_URL
	: "http://localhost:3000";

export const REGISTER_URL = `${BASE_URL}/register`;
export const UNREGISTER_URL = `${BASE_URL}/unregister`;

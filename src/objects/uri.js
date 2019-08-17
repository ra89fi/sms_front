// add production backend URL here
export default (process.env.NODE_ENV === "development" ? "http://localhost:3001" : "");

import axios from "axios";

const api=axios.create({baseURL:"http://localhost:2000/swiggy"});

export default api;
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { 
    key: "b64e3d751741465fa0daaecb75a973c0", //key will be included in the query of every HTTP request we sent to our backend
  },
});

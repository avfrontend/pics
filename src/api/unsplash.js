import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID iBuW-IP_EmXibHNczqrDtU7HCWANK9IwpO4Fguo0eeY",
  },
});

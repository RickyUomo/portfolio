import axios from "axios";
const baseUrl = "http://localhost:3001/blog";

const getAll = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

const blogService = { getAll };
export default blogService;

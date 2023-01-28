import axios from "axios";
const baseUrl =
  "https://ec2-35-78-201-173.ap-northeast-1.compute.amazonaws.com:3030/blog";

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

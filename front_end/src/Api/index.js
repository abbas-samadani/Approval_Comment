import axios from "axios";

const baseURL = "http://localhost:8000/api/v1";

export const getComments = async (orderBy,searchName) => {
  try {
    const {
      data: { comments }
    } = await axios.get(`${baseURL}/comments`, {
      params : {
        search: searchName,
        orderBy: orderBy,
      }
    });
    return comments;
  } catch (error) {
    console.error(error);
  }
};

export const approveComment = async (id , approved) => {
  try {
    const {data : {data}} = await axios.put(`${baseURL}/comments/${id}`, {
      approved: !approved
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

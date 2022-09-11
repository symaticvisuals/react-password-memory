import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000/api",
});
export const axiosRequest = async ({ ...options }) => {
  const onSuccess = (response) => response;
  const onError = (error) => error;
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

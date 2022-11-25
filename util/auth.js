import axios from "axios";
import qs from "qs";

const URL = "http://3.125.155.58";

export const createUser = async (
  username,
  email,
  password,
  location,
  role,
  source
) => {
  console.log(username, email, password);
  const data = {
    name: username,
    email,
    password,
    location,
    role,
    source,
  };
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(data),
    url: `${URL}/register`,
  };
  try {
    const response = await axios(options);
    console.log(response.data);
  } catch (err) {
    console.error(err.response.data);
  }
};

export const loginUser = async (email, password) => {
  console.log(email, password);
  const data = {
    email,
    password,
  };
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(data),
    url: `${URL}/login`,
  };
  console.log(qs.stringify(data));
  try {
    const response = await axios(options);
    const resData = response.data;
    const token = resData.token;
    if (resData && token) {
      return token;
    }
  } catch (err) {
    console.error(err.response.data);
  }
  return null;
};
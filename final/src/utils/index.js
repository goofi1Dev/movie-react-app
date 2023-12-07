import jwt_decode from "jwt-decode";

export const parseToken = (token) => {
  return jwt_decode(token);
};

export const toggleStorage = (token) => {
  if (token) {
    localStorage.setItem("accassToken", token);
  } else {
    localStorage.removeItem("accassToken");
  }
};

export const isValidToken = (token) => {
  const data = jwt_decode(token);
  const currentDate = Date.now() / 1000;

  return data.exp > currentDate;
};

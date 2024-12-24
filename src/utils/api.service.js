import request from "./axios.service";
import { POST, BASE_URL, USER } from "../app.config";
import { Decryption } from "./common.service";
console.log(BASE_URL);

// <-----------------auth------------------>

export const signupApi = (body) => {
  
  return request(`${BASE_URL}/auth/${USER}/signup`, POST, false, body)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error,"ssssssss");
      throw error;
    });
};


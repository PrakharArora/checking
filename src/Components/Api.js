import React from "react";
import axios from "axios";

// Fetching the json data from the API in this function



export const Api = async() => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
}
};

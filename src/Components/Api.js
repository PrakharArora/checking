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

export const postApi = async(data) => {
  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      userId: data.userId,
      id: data.id,
      title: data.title,
      body: data.body,
    });
    console.log(response , "Data Posted Successfully");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
}
}
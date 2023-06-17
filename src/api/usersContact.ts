import axios from "axios";
import { ContactType } from "../model";
const baseUrl: string = import.meta.env.VITE_API_URL + "api/";
const getUsersContactList = async () => {
  try {
    const resuft = await axios({
      method: "get",
      url: baseUrl + "list-contacts",
    });
    return resuft.data;
  } catch (error) {
    throw error;
  }
};
const updateConact = async (data: ContactType) => {
  try {
    const resuft = await axios({
      method: "put",
      url: baseUrl + "update/" + data._id,
      data,
    });
    return resuft.data;
  } catch (error) {
    throw error;
  }
};
const addNewConact = async (data: any) => {
  try {
    const resuft = await axios({
      method: "post",
      url: baseUrl + "add-contact",
      data,
    });
    return resuft.data;
  } catch (error) {
    throw error;
  }
};
const deleteContact = async (data: ContactType) => {
  try {
    const resuft = await axios({
      method: "delete",
      url: baseUrl + "delete/" + data._id,
    });
    return resuft.data;
  } catch (error) {
    throw error;
  }
};
export { getUsersContactList, updateConact, addNewConact, deleteContact };

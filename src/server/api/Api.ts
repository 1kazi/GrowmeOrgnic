import axios from 'axios';
import { toast } from 'react-toastify';




export  const getCommonApi = async (API_URL:string) => {
  try {
    const response = await axios.get(API_URL);
    // if(response.status==200){
    //   toast.success("Successfully get data")
    // }
    return response;
  } catch (error) {
    toast.error("Somting wrogn.")
    throw error;
  }
};

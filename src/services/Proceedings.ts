import axios from "axios";
import { Patient } from "src/types/patients/Patient";
// const API = "http://localhost:3000";
const API = process.env.NEXT_PUBLIC_API_URL;

export const storeProcedding = async (proceding: any) => {
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    // console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  try {
    const response = await axios.post(
      `${API}/usc/expedient/create`,
      proceding,
      config
    );
    return response.data;
  } catch (error: any) {
    console.error(error, "erorrrrrrr");
  }
};

export const getProceedings = async () => {
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    // console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  // console.log(API, "api");
  try {
    const response = await axios.get(`${API}/usc/expedient/retrieve`, config);
    return response.data;
    // console.log(response);
  } catch (error: any) {
    // console.error(error, "erorrrrrrr");
    // seesionEnds(error?.response?.data?.error as string);
    // return response
  }
};

export const getProceeding = async (idProceeding: any) => {
  let id: any;
  let token: any;
  if (typeof window !== "undefined") {
    id = localStorage?.getItem("id") + "" || "";
    token = localStorage?.getItem("token") + "" || "";
    // console.log(id, token, "data localstorage");
    if (!id && !token) window.location = "/auth/auth1/login" as any;
  }
  const config: any = {
    headers: {
      meID: id,
      "auth-token": token,
    },
  };
  // console.log(API, "api");
  try {
    // const response = await axios.get(
    //   `${API}/usc/expedient/retrieveOne/${idProceeding}`,
    //   config
    // );
    const response = await axios.post(
      `${API}/usc/expedient/retrieveOne`,
      { patient: idProceeding },
      config
    );
    return response.data;
    // console.log(response);
  } catch (error: any) {
    // console.error(error, "erorrrrrrr");
    // seesionEnds(error?.response?.data?.error as string);
    // return response
  }
};

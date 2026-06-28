import API from "./api";

export const addWaste = (formData) =>
  API.post("/waste/add", formData);

export const getWaste = () =>
  API.get("/waste");

export const verifyWaste = (id) =>
  API.put(`/waste/verify/${id}`);

export const deleteWaste = (id) =>
  API.delete(`/waste/${id}`);
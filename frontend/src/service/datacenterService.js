import axios from "axios";

const vmProvision = async payload => {
  return axios.post("http://localhost:3000/datacenters", payload);
};

export default {
  vmProvision
};

import React from "react";
import { PushSpinner } from "react-spinners-kit";

const IsLoading = ({ isLoading }) => {
  return <PushSpinner size={30} color="#686769" loading={isLoading} />;
};

export default IsLoading;

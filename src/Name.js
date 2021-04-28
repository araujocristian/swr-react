import React from "react";
import { useProjectInfo } from "./useProjectInfo";

const Name = () => {
  const { data } = useProjectInfo();

  return <h1>Projeto: {data.name}</h1>;
};

export default Name;

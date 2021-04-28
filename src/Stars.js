import { useProjectInfo } from "./useProjectInfo";

const Stars = () => {
  const { data } = useProjectInfo();

  return <h3>Estrelas: {data.stargazers_count}</h3>;
};

export default Stars;

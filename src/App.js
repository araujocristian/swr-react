import Name from "./Name";
import Stars from "./Stars";
import { useProjectInfo } from "./useProjectInfo";

const App = () => {
  const { isLoading, error } = useProjectInfo();

  if (isLoading) {
    return <h1>Buscando dados do projeto...</h1>;
  }

  if (error) {
    return <h1>Deu erro: {error.message}</h1>;
  }

  return (
    <>
      <Name />
      <Stars />
    </>
  );
};

export default App;

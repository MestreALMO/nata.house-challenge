import { createContext, useState, useContext, useEffect } from "react";

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const [apiData, setApiData] = useState([]);

  const apiLink = "https://swapi.dev/api/starships";

  //API get
  useEffect(() => {
    fetch(apiLink).then((response) =>
      response.json().then((data) => setApiData(data.results))
    );
  }, []);

  return (
    <ApiContext.Provider value={{ apiData, setApiData }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  const context = useContext(ApiContext);
  const { apiData, setApiData } = context;
  return { apiData, setApiData };
}

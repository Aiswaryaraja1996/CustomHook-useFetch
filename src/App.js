import { useState } from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const [query, setQuery] = useState(null);
  const [url, setUrl] = useState(null);

  const { loading, isError, data, fetchRequest } = useFetch(
    url + `&page=1`
  );

  return (
    <div className="App">
      <h2>Custom Hook - useFetch</h2>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <button
        onClick={() => setUrl(`https://api.github.com/search/users?q=${query}`)}
      >
        Searh
      </button>
      <div>{loading && "LOADING"}</div>
      <div>
        {!loading &&
          data?.items?.map((item) => <div key={item.id}>{item.login}</div>)}
      </div>
   
    </div>
  );
}

export default App;

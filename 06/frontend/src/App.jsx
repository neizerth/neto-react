import { useEffect, useState } from "react";
import "./App.css";
import { News } from "./components/News/News";
import { loadNews } from "./api/loadNews";
import { Loader } from "./components/Loader/Loader";
import { LanguageContext } from "./config/context";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNewsToState = () => {
    setLoading(true);

    loadNews()
      .then((r) => r.json())
      .then((data) => {
        setNews(data);
      })
      .finally(() => {
        setLoading(false);

        step();
      });
  };
  const step = () => {
    setTimeout(loadNewsToState, 5000);
  };

  useEffect(() => {
    loadNewsToState();
  }, []);

  return (
    <LanguageContext.Provider value={{ language: "ru" }}>
      <News data={news} />
      <Loader loading={loading} />
    </LanguageContext.Provider>
  );
}

export default App;

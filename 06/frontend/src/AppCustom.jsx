import "./App.css";
import { News } from "./components/News/News";
import { Loader } from "./components/Loader/Loader";
import { LanguageContext } from "./config/context";
import { usePolling } from "./hooks/usePolling";
import { NEWS_URL } from "./config/app";

function App() {
  const { loading, data } = usePolling({
    url: NEWS_URL,
    pollInterval: 5000,
  });

  return (
    <LanguageContext.Provider value={{ language: "ru" }}>
      <News data={data} />
      <Loader loading={loading} />
    </LanguageContext.Provider>
  );
}

export default App;

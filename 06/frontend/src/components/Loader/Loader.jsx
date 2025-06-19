import { useContext } from "react";
import S from "./Loader.module.css";
import { LanguageContext } from "../../config/context";

const translations = {
  en: "Loading...",
  ru: "Загрузка...",
};

export const Loader = ({ loading }) => {
  const { language } = useContext(LanguageContext);

  const translation = translations[language];

  if (!loading) {
    return null;
  }

  return (
    <div className={S.loader}>
      <div className={S.text}>{translation}</div>
    </div>
  );
};

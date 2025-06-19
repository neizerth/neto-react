import { NEWS_URL } from "../config/app";

export const loadNews = () => fetch(NEWS_URL);

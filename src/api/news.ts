import axios from "axios";
import { config } from ".";

export interface NewsArticle {
    id: number;
    title: string; 
    content: string;
}

export const getArticles = async () => {
    const response = await axios.request<NewsArticle[]>({
        url: config.baseUri + "/News"
    });

    return response.data;
}

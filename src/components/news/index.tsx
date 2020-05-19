import * as React from "react";
import { NewsArticle, getArticles } from "../../api/news";

export const News = () => {
    const [articles, setArticles] = React.useState<NewsArticle[]>([]);
    
    React.useEffect(() => {(async () => {
        setArticles(await getArticles());
    })()}, []);

    return (
        <div id="news-container">
            {articles.map((article) => (
                <div key={article.id}>
                    <h1>{article.title}</h1>
                    {article.content}
                </div>
            ))}
        </div>
    );
};
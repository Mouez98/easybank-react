import React, { useState } from "react";

import Container from "../../../ui/Container";
import { articles } from "../../../../data";
import Article from "./SingleArticle";

const Articles = () => {
  const latestArticles = useState(articles)[0].articles;

  return (
    <section className="articles">
      <Container>
        <h2>Latest Articles</h2>
        <div className="articles-container">
          {latestArticles &&
            latestArticles.map((article) => (
              <Article key={article.id} {...article} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Articles;

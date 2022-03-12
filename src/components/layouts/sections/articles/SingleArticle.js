import React from "react";

const Article = ({title,image,author,desc}) => {
    return(<article className="single-article">
    <img src={image} alt={title}/>
    <div className="text">
      <small>{author}</small>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </article>)
}

export default Article;
import React from "react";


const SingleOffer = (props) => {
     return(
        <article className="single-offer">
        <img src={props.icon} alt={props.title} />
        <h3>{props.title}</h3>
        <p>
          {props.desc}
        </p>
      </article>
     )
}

export default SingleOffer;
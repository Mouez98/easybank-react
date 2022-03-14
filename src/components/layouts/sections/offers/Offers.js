import React, { useState } from "react";

import Container from "../../../ui/Container";
import { whyEasyBanking } from "../../../../data";
import SingleOffer from "./SingleOffer";

const Offers = () => {
  const offers = useState(whyEasyBanking.offers)[0];
  const { title, desc } = whyEasyBanking.easyBanking;
  return (
    <section className="why-easybanking">
      <Container>
        <div className="title">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="offers-container">
          {offers &&
            offers.map((offer) => <SingleOffer key={offer.id} {...offer} />)}
        </div>
      </Container>
    </section>
  );
};

export default Offers;

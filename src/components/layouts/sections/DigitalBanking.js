import React from "react";
import Button from "../../ui/Button";

import mockup from "../../../assets/images/image-mockups.png";
import Container from "../../ui/Container";

const DigitalBanking = () => {
  return (
    <section className="digital-banking">
      <Container>
        <div className="digital-container">
          <div className="part-two">
            <img src={mockup} alt="Phones" />
            <div className="part-one">
            <h3>Next generation digital banking</h3>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button>Request Invite</Button>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DigitalBanking;

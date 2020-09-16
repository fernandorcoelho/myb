import React from "react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

import {
  PageLanding,
  Presentation,
  PresentationText,
  Button,
  Memory,
  CostumerTestimonial,
  LandingServices,
  ScheduledEvents,
  EventsPhotos,
  LandingContact,
  Team,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <PageHeader />
      <Presentation>
        <PresentationText>
          <h2>MOVE YOUR BODY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis iure expedita ducimus mollitia sit omnis doloremque
            consectetur iusto rem beatae amet neque eum officiis, laboriosam
            esse non corrupti eaque accusantium. <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quibusdam animi modi perspiciatis unde fugit tenetur quos provident
            tempore quaerat eius, perferendis culpa nemo est laborum excepturi
            suscipit vel obcaecati iste. <br />
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quibusdam animi modi perspiciatis unde fugit tenetur quos provident
            tempore quaerat eius, perferendis culpa nemo est laborum excepturi
            suscipit vel obcaecati iste.
          </p>
        </PresentationText>
        <Link to="/" className="button-link">
          <Button>ENTRAR EM CONTATO</Button>
        </Link>
      </Presentation>

      <Memory />

      <CostumerTestimonial />

      <LandingServices />

      <ScheduledEvents />

      <EventsPhotos />

      <LandingContact />

      <Team />

      <Footer />
    </PageLanding>
  );
};

export default Landing;

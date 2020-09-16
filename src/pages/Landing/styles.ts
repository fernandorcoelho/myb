import styled from "styled-components";
import hero from "../../assets/background/hero.png";

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  .button-link {
    width: 37rem;
  }
`;

export const Presentation = styled.div`
  /* margin-top: 7.5rem; */
  padding: 6rem 13rem;
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: left;

  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;

  padding: 4rem 9rem 8rem;

  @media (max-width: 375px) {
    padding: 4rem 4rem 8rem;
  }
`;

export const PresentationText = styled.div`
  width: 50%;
  height: 100%;
  color: var(--white);

  > h2,
  p {
    margin-bottom: 2rem;
  }

  > h2 {
    font-style: italic;
    font-size: 3.6rem;
    line-height: 4.4rem;
  }

  > p {
    font-size: 2.4rem;
    line-height: 3.6rem;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  width: 37rem;
  height: 6.3rem;

  border-radius: 2rem;
  background-color: var(--pink);
  color: var(--white);

  font-weight: 500;
  font-size: 2.4rem;

  transition: ease 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--grey);
    background-color: var(--dark-pink);
  }
`;

export const Memory = styled.div``;

export const CostumerTestimonial = styled.div``;

export const LandingServices = styled.div``;

export const ScheduledEvents = styled.div``;

export const EventsPhotos = styled.div``;

export const LandingContact = styled.div``;

export const Team = styled.div``;

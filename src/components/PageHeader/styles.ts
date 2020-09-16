import styled from "styled-components";

export const PageHeaderContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 7.5rem;
  top: 0;

  padding: 1.2rem 13.6rem;

  display: flex;
  flex-flow: row;
  align-items: center;

  background-color: var(--blue);

  @media (min-width: 1023px) {
    padding: 1.2rem 0rem;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const TopBarContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  /* display: flex;
  align-items: center; */
  display: grid;
  grid-auto-flow: column;

  @media (min-width: 1023px) {
    transform: scale(0.8);
  }

  @media (max-width: 960px) {
    > img {
      transform: translateX(-6rem) scale(0.9);
    }
    .menu-icon {
      transform: translateX(8rem) scale(0.9);
    }
  }

  @media (max-width: 768px) {
    > img {
      transform: translateX(3rem) scale(0.74);
    }
    .menu-icon {
      transform: translateX(-2rem) scale(0.9);
    }
  }

  @media (max-width: 425px) {
    > img {
      transform: translateX(-6rem) scale(0.54);
    }
    .menu-icon {
      transform: translateX(-8rem) scale(0.8);
    }
  }

  @media (max-width: 375px) {
    > img {
      transform: translateX(-8rem) scale(0.58);
    }
    .menu-icon {
      transform: translateX(-8rem) scale(0.8);
    }
  }

  @media (max-width: 320px) {
    > img {
      transform: translateX(-18rem) scale(0.4);
    }
    .menu-icon {
      transform: translateX(-20rem) scale(0.68);
    }
  }
`;

export const HeaderContent = styled.div`
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 2rem;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-links {
    display: flex;
    height: 100%;
    padding: 0.5rem 1rem;

    color: var(--white);
    align-items: center;

    text-decoration: none;
    font-style: italic;
    font-size: 2.4rem;
    transition: all 0.4s ease-out;
  }

  .nav-links:hover {
    border-bottom: 4px solid var(--color-primary);
    transition: all 0.2s ease-out;
    cursor: pointer;

    color: var(--light-blue);
  }

  @media (max-width: 1439px) {
    .nav-menu {
      grid-gap: 0;
    }
  }

  @media (max-width: 960px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 6.8rem;
      left: -100%;
      opacity: 1;
      transition: all 0.4s ease;
    }

    .nav-menu.active {
      background-color: var(--light-blue);
      left: 0;
      opacity: 1;
      transition: all 0.4s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      color: var(--blue);
      border-radius: 0;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;
  width: 4rem;

  color: var(--white);

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 320px) {
    font-size: 6rem;
  }
`;

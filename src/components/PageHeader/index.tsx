import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/svg/logoImg.svg";

import {
  PageHeaderContainer,
  TopBarContainer,
  HeaderContent,
  MenuIcon,
} from "./styles";

const PageHeader: React.FC = () => {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 768) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <PageHeaderContainer>
      <TopBarContainer>
        <img src={logoImg} alt="Running Icon" />
        <MenuIcon className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </MenuIcon>
      </TopBarContainer>

      <HeaderContent>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Serviços
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              Eventos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
              Equipe
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Cotato
            </Link>
          </li>
        </ul>

        {/* <Link to="/">Início</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Serviços</Link>
        <Link to="/">Eventos</Link>
        <Link to="/">Equipe</Link>
        <Link to="/">Cotato</Link> */}
      </HeaderContent>
    </PageHeaderContainer>
  );
};

export default PageHeader;

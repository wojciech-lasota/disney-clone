import React from "react";
import styled from "styled-components";

function Header() {
  const navMenuLinks = [
    { name: "HOME", icon: "home-icon.svg" },
    { name: "SEARCH", icon: "search-icon.svg" },
    { name: "WATCHLIST", icon: "watchlist-icon.svg" },
    { name: "ORIGINALS", icon: "original-icon.svg" },
    { name: "MOVIES", icon: "movie-icon.svg" },
    { name: "SERIES", icon: "series-icon.svg" },
  ];
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        {navMenuLinks.map(({ name, icon }, index) => (
          <a href="#" key={index}>
            <img src={"images/" + icon} alt={name + " icon"} />
            <span>{name}</span>
          </a>
        ))}
      </NavMenu>
      <UserImg src="https://lh3.googleusercontent.com/ogw/AOh-ky0yr_alD7RtvFeHY30yDb8s9gxJvymhinPRNcOC=s32-c-mo" />
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 36px;
  height: 70px;
  background: #090b13;
  overflow: hidden;

  ${"" /* justify-content: space-between; */}
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    padding: 0 20px;
    text-decoration: none;
    color: white;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        background: white;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

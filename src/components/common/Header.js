import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { createStructuredSelector } from "reselect";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";
import { ToggleTheme } from "./ToggleTheme";
import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  background: ${(p) => p.theme.BASE2};
  border-bottom: 3px solid ${(p) => p.theme.BASE2};
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 0;
  font-family: "Open Sans";
  border-bottom: 3px solid ${(p) => p.theme.BASE2};
  background: ${(p) => p.theme.BASE2};

  @media (min-width: 768px) {
    padding: 0;
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: ${(p) => p.theme.SECONDARY_TEXT};
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: ${(p) => p.theme.SECONDARY_TEXT};
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const TitleNav = styled.div`
  padding: 0;
  .top {
    margin: 0;
  }
`;

const TopLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.SECONDARY_TEXT};
`;

const Header = ({ currentUser, signOutStart }) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <TitleNav>
        <h1 className="top">
          <TopLink to="/top">Join Code</TopLink>
        </h1>
      </TitleNav>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        {currentUser ? (
          <>
            <StyledLink to="/" isActive={pathname === "/"}>
              Home
            </StyledLink>
            <StyledLink to="/service" isActive={pathname === "/service"}>
              Service
            </StyledLink>
            <StyledLink to="/user" isActive={pathname === "/user"}>
              My page
            </StyledLink>
          </>
        ) : (
          <StyledLink to="/login" isActive={pathname === "/login"}>
            Login
          </StyledLink>
        )}

        <ToggleTheme isActive={id === "dark"} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

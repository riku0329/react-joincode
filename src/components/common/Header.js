import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { ToggleTheme } from './ToggleTheme';
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  position: relative;
  top: 0;
  background: ${(p) => p.theme.BASE2};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 20;
  padding: 0;
  font-family: 'Open Sans';
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
  font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
  color: ${(p) => p.theme.SECONDARY_TEXT};
`;

const MobileMenuIcon = styled.div`
  margin: auto 10px auto auto;
  width: 40px;
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

const HeaderTitle = styled.h1`
  text-align: center;
  margin: auto auto auto 10px;
  a {
    text-decoration: none;
    font-size: 3.4rem;
    font-family: 'Kaushan Script';
    color: ${(p) => p.theme.SECONDARY_TEXT};
  }
`;

const Header = ({ currentUser, signOutStart }) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <HeaderTitle>
        <Link to='/top'>Join Code</Link>
      </HeaderTitle>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        {currentUser ? (
          <>
            <StyledLink to='/' isActive={pathname === '/'}>
              ホーム
            </StyledLink>
            <StyledLink to='/service' isActive={pathname === '/service'}>
              サービス
            </StyledLink>
            <StyledLink to='/user' isActive={pathname === '/user'}>
              アカウント
            </StyledLink>
            <StyledLink to='/offer/send' isActive={pathname === '/offer/send'}>
              送信Box
            </StyledLink>
            <StyledLink
              to='/offer/received'
              isActive={pathname === '/offer/received'}
            >
              受信Box
            </StyledLink>
          </>
        ) : (
          <StyledLink to='/login' isActive={pathname === '/login'}>
            Login
          </StyledLink>
        )}

        <ToggleTheme isActive={id === 'dark'} onToggle={setTheme} />
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

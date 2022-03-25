import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeRoute } from "../features/viewer/viewerSlice";
import {
  selectUserName,
  selectUserAvatar,
  selectUserEmail,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";

/**
 * import {useHistory} from 'react-router-dom'
 * const history = useHistory()
 * history.push('/routename')
 */

function Header() {
  const name = useSelector(selectUserName);
  const avatar = useSelector(selectUserAvatar);
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const signIn = () => {
    dispatch(
      setUserLogin({
        name: "jordn",
        email: "jordn@yo.com",
        avatar: "./images/avatar.jpg",
      })
    );
    dispatch(changeRoute("/"));
  };

  const signOut = () => {
    dispatch(setSignOut());
    dispatch(changeRoute("/login"));
  };

  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      {!name ? (
        <Login onClick={signIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/">
              <img src="./images/home-icon.svg" alt="home icon" />
              <span>HOME</span>
            </a>
            <a href="/">
              <img src="./images/search-icon.svg" alt="home icon" />
              <span>SEARCH</span>
            </a>
            <a href="/">
              <img src="./images/watchlist-icon.svg" alt="home icon" />
              <span>WATCHLIST</span>
            </a>
            <a href="/">
              <img src="./images/original-icon.svg" alt="home icon" />
              <span>ORIGINAL</span>
            </a>
            <a href="/">
              <img src="./images/movie-icon.svg" alt="home icon" />
              <span>MOVIES</span>
            </a>
            <a href="/">
              <img src="./images/series-icon.svg" alt="home icon" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <Avatar src={avatar} alt="avatar" onClick={signOut} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 50px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 70px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
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
        height: 1.5px;
        position: absolute;
        background: white;
        left: 0;
        right: 0;
        transform: scaleX(0);
        opacity: 0;
        transform-orign: left center;
        bottom: -6px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
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

const Avatar = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const Login = styled.button`
  background: rgba(0, 0, 0, 0.6);
  outline: none;
  border: 1px solid #f9f9f9;
  padding: 6px 16px;
  color: rgb(249, 249, 249);
  border-radius: 4px;
  letter-spacing: 1.3px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { GoSearch } from 'react-icons/go';
import { ImBubble2 } from 'react-icons/im';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

function Header(props) {
  return (
    <div className="header">
      <div className="header__left">
        <a href='/'>
            <img className="header__logo" src={logo} alt="" />
        </a>
        <div className="header__search">
          <input type="text" className="search__input" placeholder='키워드를 검색하세요'/>
          <GoSearch className="header__searchIcon"></GoSearch>
        </div>
        <div className="header__nav__left">
          <div className="header__option">
            <a href="/events">EVENTS</a>
          </div>
          <div className="header__option">
            <a href="/notice">NOTICE</a>
          </div>
        </div>
      </div>
      <div className="header__nav__right">
        {
            <AfterLogin />
            // <BeforeLogin />
        }
      </div>
    </div>
  );
}

function BeforeLogin() {
  return (
    <>
      <div className="header__option">
        {/* FiLogOut */}
        <a href="/login">
          <AiOutlineUser className="header__alertIcon"></AiOutlineUser>
          <span className="header__optionOne">로그인</span>
        </a>
      </div>
      <div className="header__option">
        <a href="/join">
          <AiOutlineUser className="header__alertIcon"></AiOutlineUser>
          <span className="header__optionOne">회원가입</span>
        </a>
      </div>
    </>
  )
}

function AfterLogin() {
    return(
    <>
        <div className="header__option">
            <a href="#a">
                <ImBubble2 className="header__alertIcon"></ImBubble2>
                <span className="header__optionOne">알림</span>
            </a>
        </div>
        <div className="header__option">
            <a href="/logout">
                <FiLogOut className="header__alertIcon"></FiLogOut>
                <span className="header__optionOne">로그아웃</span>
            </a>
        </div>
    </>
  )
}

export default Header;

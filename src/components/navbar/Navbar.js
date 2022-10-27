import React, { useContext } from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import { DarkModeContext } from '../../context/darkModeContext';
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="search...." />
            <SearchIcon />
          </div>
          <div className="items">
            <div className="item">
              <LanguageIcon className="icon" />
              English
            </div>
            <div className="item">
              <DarkModeIcon
                className="icon"
                onClick={() => dispatch({ type: 'TOGGLE' })}
              />
            </div>
            <div className="item">
              <FullscreenIcon className="icon" />
            </div>
            <div className="item">
              <NotificationsActiveIcon className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineIcon className="icon" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <FilterListOffIcon className="icon" />
            </div>
            <div className="item">
              <img src="/assets/avatar.jpg" alt="" className="avator" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

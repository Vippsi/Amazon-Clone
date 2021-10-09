import React from 'react';
import amazonLogo from '../imgs/amazon_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import '../css/header.css';

const Header: React.FC = (props) => {
  return (
    <div className='header'>
      <img className='header__logo' src={amazonLogo} alt='' />

      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'></div>
      <div className='header__option'>
        <span className='header__optionLineOne'>Hello Guest</span>
        <span className='header__optionLineTwo'>Sign in</span>
      </div>
      <div className='header__option'>
        <span className='header__optionLineOne'>Returns</span>
        <span className='header__optionLineTwo'>& Orders</span>
      </div>
      <div className='header__option'>
        <span className='header__optionLineOne'>Your</span>
        <span className='header__optionLineTwo'>Prime</span>
      </div>
      <div className='header__optionBasket'>
        <span className='header__optionLineTwo header__basketCount'>0
        </span>
      </div>
    </div>
  );
};

export default Header;

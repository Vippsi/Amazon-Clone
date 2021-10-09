import React from 'react';
import amazonLogo from '../imgs/amazon_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import '../css/header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = (props) => {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={amazonLogo} alt='' />
      </Link>
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
      <Link to='/checkout'>
        <div className='header__optionBasket'>
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;

import React from 'react';
import amazonLogo from '../imgs/amazon_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import '../css/header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Header: React.FC = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={amazonLogo} alt='' />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>Sign in</span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout' className='header__checkoutLink'>
          <div className='header__optionBasket'>
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';

import './Header.css';
// import {images} from '../../constants';
import {SubHeading} from '../../components';
import { images } from '../../constants';
const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper__info'>
       <SubHeading title="Chase The New Falvour"/>
       <h1 className='app__header_h1'> The Key To<br/> Find Dining</h1>
       <p className='p__opensans' style={{margin:"2rem 0"}}> 
       Sit tellus lobortis sed senectus vivamus molestie. 
       Condimentum volutpat<br/>  morbi facilisis quam scelerisque sapien.Et, penatibus aliquam amet tellus 
       </p>
       <button type='button' className='custom__button'> Explore Menue</button>
    </div>
    <div className='app__wrapper_img'>
     <img src={images.welcome} alt='welcome to resturant'/>
    </div>
  </div>
);

export default Header;

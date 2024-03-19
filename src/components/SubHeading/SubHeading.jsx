import React from 'react';
import {images} from '../../constants';
import './SubHeading.css';
const SubHeading = (props) => (
  <div className="" style={{marginBottom:"1rem"}}> 
   <p className='p__cormorant'>
    {props.title}
   </p>
   <img src={images.spoon} alt='spoon imge' className='img__spoon'/>
  </div>
);

export default SubHeading;

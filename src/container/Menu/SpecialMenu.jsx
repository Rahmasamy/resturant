import React from 'react';
import { SubHeading,MenuItem } from '../../components';
import './SpecialMenu.css';
import { images,data } from '../../constants';
const SpecialMenu = () => (
  <div className='app__specialMenue flex__center 'id='menue'>
    <div className="app__specialMenue-title">
      <SubHeading title="Menu that fits you palatte"/>
      <h1 className='headtext__cormorant'>Today's Speciacl</h1>
    </div>
    <div className="app_speciaMenue-container section__padding flex__center">
    <div className='app__specialMenue-menue' style={{flexDirection:"column"}}>
      <div className='app__specialMenue-menue_wine flex__center'>
        <p className='app__specialMenue_menue_heading'> Wine & Beer</p>
      </div>
      <div className='app__specialMenue-menue_items'>
          {
            data.wines.map((wine,idx)=> (
              <MenuItem key={wine.title+idx} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))
          }
        </div>
      
    </div>
    <div className='app__specialMenue-menue_img'>
      <img src={images.menu} alt="menue imag"/>
    </div>
    <div className='app__specialMenue-menue'style={{flexDirection:"column"}}>
      <div className='app__specialMenue-menue_cocktaiels flex__center'>
        <p className='app__specialMenue_menue_heading'> Cocktails</p>
        </div>
        <div className='app__specialMenue-menue_items'>
          {
            data.cocktails.map((cocktail,idx)=> (
              <MenuItem key={cocktail.title+idx} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))
          }
        </div>
     
      
     
    </div>
    </div>
    <div style={{'marginTop':"15px"}}>
      <button type='button' className='custom__button'> View More</button>
      </div>
   
  </div>
);

export default SpecialMenu;

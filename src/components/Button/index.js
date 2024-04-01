import React from 'react';
import './styles.scss';
import BUTTON_CONSTANTS from '../../constants/button.constants';

/**
 * @author ChandraSekharB
 * @param btnStyle Determines either gradient-border, default: white-border ,search : gradient background with search icon
 * @param name Label of the button
 * @param onClick click handler
 */
const Button = ({btnStyle, name, onClick}) => {
  return (
      btnStyle === BUTTON_CONSTANTS.btnTypeSearch ?  
        (<button className='search-bg flex justify-center items-center gap-1 md:gap-2 font-bold text-lg md:text-sm lg:text-md text-white rounded-md md:rounded-lg lg:rounded-xl py-2 md:py-2 lg:py-3 px-3 md:px-3 lg:px-4' onClick={onClick}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <span className='hidden md:block'>
            {name}
          </span>
        </button>)
      :
        (<div className={`border-mask  ${btnStyle === 'gradient-border' ? 'gradient-border-mask bg-blue-500 bg-opacity-25' : 'white-border-mask'}`} onClick={onClick}>
          <button className='font-space font-light w-[152 px] text-white py-2.5 rounded-2xl text-sm lg:py-5 lg:text-xl lg:px-2.5 lg:w-56'>
              {name}
          </button>
        </div>)
    )
}

export default Button
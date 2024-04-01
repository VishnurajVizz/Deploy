import './styles.scss';
import React from 'react';
import Button from '../Button';
import BUTTON_CONSTANTS from '../../constants/button.constants';
/**
 * @param placeholder Place holder for the text input 
 */

const SearchBar = ({placeholder}) => {
  return (
    <div className="font-redRose bg-arsenic flex gap-2 p-1.5 rounded-xl md:rounded-xl lg:rounded-2xl border-solid border border-white ">
      <input placeholder={placeholder} className='search-input flex-1 px-2 bg-transparent outline-none text-white text-sm md:text-md lg:text-lg'/>
      <Button btnStyle={BUTTON_CONSTANTS.btnTypeSearch} name={BUTTON_CONSTANTS.search}/>
    </div>
  )
}

export default SearchBar
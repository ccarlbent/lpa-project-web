import React, { useState } from 'react';
import LightButton from '../../assets/darkmodephoto/light-mode-button.png';
import DarkButton from '../../assets/darkmodephoto/dark-mode-button.png';


function Darkmode() {
    const [theme, setTheme] = useState('light');
  return (
    <div>
      <img src={LightButton} alt=''
      className={ theme === 'dark' ? 'opacity-0' : 'opacity-100' }
      onClick={() => setTheme( theme === 'light' ? 'dark' : 'light')}
      />
      <img
      onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark')} 
      src={DarkButton} alt='' className=''/>
    </div>
  )
}

export default Darkmode;

import React, { useState } from 'react';

const CloseNav = () => {
  const [navWidth, setNavWidth] = useState(0);
  const [divDisplay, setDivDisplay] = useState('none');

  const openNav = () => {
    setNavWidth('100%');
  };

  const closeNav = () => {
    setNavWidth('0%');
  };

  const toggleDiv = () => {
    setDivDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
  };

  return (
    <div>
      <button onClick={openNav}>Open Nav</button>
      <button onClick={closeNav}>Close Nav</button>
      <div id="myNav" style={{ width: navWidth }}>
        {/* Your navigation content here */}
      </div>

      <button onClick={toggleDiv}>Toggle DIV</button>
      <div id="myDIV" style={{ display: divDisplay }}>
        {/* Your DIV content here */}
      </div>
    </div>
  );
};

export default CloseNav;
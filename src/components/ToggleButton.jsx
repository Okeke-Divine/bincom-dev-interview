// togglebutton.jsx
import React, { useContext } from 'react';
import { APIContext } from './APIContext'; // Import the context

const ToggleButtons = () => {
  const { supplier, toggleSupplier } = useContext(APIContext);

  return (
    <div className="join">
      <button
        className={`join-item btn ${supplier === 'FragranceX' ? 'btn-active' : 'btn-ghost'}`}
        onClick={() => toggleSupplier('FragranceX')}
      >
        FragranceX
      </button>
      <button
        className={`join-item btn ${supplier === 'FragranceNet' ? 'btn-active' : 'btn-ghost'}`}
        onClick={() => toggleSupplier('FragranceNet')}
      >
        FragranceNet
      </button>
      <button
        className={`join-item btn ${supplier === 'Morris Costumes' ? 'btn-active' : 'btn-ghost'}`}
        onClick={() => toggleSupplier('Morris Costumes')}
      >
        Morris Costumes
      </button>
    </div>
  );
};

export default ToggleButtons;

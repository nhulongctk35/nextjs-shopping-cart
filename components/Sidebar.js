import React from 'react';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

function Filter({ onSelect }) {
  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      {availableSizes.map((item, index) => {
        return (
          <div key={index} className="filters-available-size">
            <button onClick={onSelect}>
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
}

const Sidebar = ({ onSelect }) => {
  return <Filter onSelect={onSelect} />;
};

Sidebar.defaultProps = {
  onSelect: () => {},
};

export default Sidebar;

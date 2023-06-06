import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';

export const TryItComponent = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <NavLink
        onClick={() => handleClick('component1')}
        active={activeTab === 'component1'}
      >
        Tab 1
      </NavLink>

      <NavLink
        onClick={() => handleClick('component2')}
        active={activeTab === 'component2'}
      >
        Tab 2
      </NavLink>

      {activeTab === 'component1' && <Component1 />}
      {activeTab === 'component2' && <Component2 />}
    </div>
  );
};

const Component1 = () => {
  return <div>This is component 1</div>;
};

const Component2 = () => {
  return <div>This is component 2</div>;
};


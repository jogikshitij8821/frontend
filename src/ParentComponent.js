import React, { useState } from 'react';
import Sidebar from './Sidebar';

function ParentComponent() {
  const [activeSection, setActiveSection] = useState('blog');

  return (
    <div>
      <Sidebar setActiveSection={setActiveSection} />

      {/* Render other content based on activeSection */}
      {activeSection === 'admin' ? (
        <Admin />
      ) : (
        <Blog />
      )}
    </div>
  );
}

export default ParentComponent;

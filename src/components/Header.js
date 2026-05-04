import React from 'react';

function Header({ title }) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      </div>
    </div>
  );
}

export default Header;

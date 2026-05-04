import React from 'react';
import { setoranTunai, placeholders } from '../../../constants/labels';

function DetailSetoran({ nominal, onNominalChange, message, onMessageChange }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-red-500 mr-2">
          <rect x="3" y="6" width="18" height="12" rx="2" ry="2"></rect>
          <circle cx="12" cy="12" r="3"></circle>
          <line x1="12" y1="12" x2="12" y2="12"></line>
        </svg>
        <h2 className="text-base font-semibold text-gray-900">{setoranTunai.labels.detailSetoran}</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">{setoranTunai.labels.nominal}</label>
          <div className="relative">
            <span className="absolute left-4 top-3 text-gray-900 font-medium">IDR</span>
            <input
              type="text"
              value={nominal}
              onChange={onNominalChange}
              className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">{setoranTunai.labels.berita}</label>
          <input
            type="text"
            value={message}
            onChange={onMessageChange}
            placeholder={placeholders.berita}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailSetoran;

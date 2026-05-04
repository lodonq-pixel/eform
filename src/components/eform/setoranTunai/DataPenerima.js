import React from 'react';
import { CreditCard } from 'lucide-react';
import { setoranTunai, placeholders } from '../../../constants/labels';

function DataPenerima({ accountNumber, onAccountNumberChange }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center mb-4">
        <CreditCard size={20} className="text-red-500 mr-2" />
        <h2 className="text-base font-semibold text-gray-900">{setoranTunai.labels.dataPenerima}</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">{setoranTunai.labels.nomorRekening}</label>
          <input
            type="text"
            value={accountNumber}
            onChange={onAccountNumberChange}
            placeholder={placeholders.nomorRekening}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">{setoranTunai.labels.nama}</label>
          <input
            type="text"
            placeholder={placeholders.namaOtomatis}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
            disabled
          />
        </div>
      </div>
    </div>
  );
}

export default DataPenerima;

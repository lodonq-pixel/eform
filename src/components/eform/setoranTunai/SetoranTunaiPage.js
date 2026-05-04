import React, { useState } from 'react';
import ProgressSteps from '../../ProgressSteps';
import Header from '../../Header';
import DataPenerima from './DataPenerima';
import DetailSetoran from './DetailSetoran';
import { global, setoranTunai } from '../../../constants/labels';

function SetoranTunaiPage({ onBack }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [nominal, setNominal] = useState('0');
  const [message, setMessage] = useState('');

  const stepsArray = [
    { id: 1, number: '1', label: setoranTunai.steps.penerima },
    { id: 2, number: '2', label: setoranTunai.steps.pelakuTransaksi },
    { id: 3, number: '3', label: setoranTunai.steps.konfirmasi },
    { id: 4, number: '4', label: setoranTunai.steps.ringkasanTransaksi }
  ];

  const currentStep = 0;

  const formatCurrency = value => {
    return new Intl.NumberFormat('id-ID').format(value);
  };

  const handleNominalChange = e => {
    const value = e.target.value.replace(/\D/g, '');
    setNominal(formatCurrency(value));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header title={setoranTunai.labels.header} />

      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <ProgressSteps currentStep={currentStep} steps={stepsArray} />
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 space-y-6">
        {/* Data Penerima Section */}
        <DataPenerima
          accountNumber={accountNumber}
          onAccountNumberChange={e => setAccountNumber(e.target.value)}
        />

        {/* Detail Setoran Section */}
        <DetailSetoran
          nominal={nominal}
          onNominalChange={handleNominalChange}
          message={message}
          onMessageChange={e => setMessage(e.target.value)}
        />
      </div>

      {/* Bottom Buttons */}
      <div className="px-4 py-4 bg-white border-t border-gray-200">
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="flex-1 py-3 px-4 border border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-50"
          >
            {global.back}
          </button>
          <button
            disabled={!accountNumber || nominal === '0'}
            className={`flex-1 py-3 px-4 font-medium rounded-lg disabled:cursor-not-allowed ${
              !accountNumber || nominal === '0'
                ? 'bg-gray-300 text-gray-500'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            {global.next}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetoranTunaiPage;

import React, { useState } from 'react';
import TransactionCard from './components/TransactionCard';
import SetoranTunaiPage from './components/eform/setoranTunai/SetoranTunaiPage';
import logo from './logo.svg';
import { global } from './constants/labels';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleSetoranClick = () => {
    setCurrentScreen('setoran');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  if (currentScreen === 'setoran') {
    return <SetoranTunaiPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans flex flex-col items-center justify-center p-6">
      {/* Dekorasi Background Atas (Abstrak) */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none">
        <div className="grid grid-cols-2 gap-1">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-bj-orange rounded-tr-full"
            ></div>
          ))}
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex items-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mr-2">e-Form</h1>
        <div className="flex items-center border-l-2 border-gray-300 pl-4">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-1" />
          <div className="flex flex-col leading-none">
            <span className="text-xs font-semibold text-gray-600">Bank</span>
            <span className="text-xl font-black text-gray-900">Jakarta</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center w-full max-w-md">
        <h2 className="text-lg font-bold text-gray-700 mb-6">
          Jenis Transaksi
        </h2>

        <div className="flex gap-4 justify-center">
          <TransactionCard
            title={global.setoran}
            subtitle={global.tunai}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6H6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 4H8C6.89543 4 6 4.89543 6 6V8H18V6C18 4.89543 17.1046 4 16 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <rect
                  x="8"
                  y="10"
                  width="8"
                  height="6"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="13" r="1" fill="currentColor" />
                <path
                  d="M9.5 14.5C9.5 14.5 9 14 9 13.5C9 13 9.5 12.5 9.5 12.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14.5 14.5C14.5 14.5 15 14 15 13.5C15 13 14.5 12.5 14.5 12.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
            onClick={handleSetoranClick}
          />
          <TransactionCard
            title={global.tarikan}
            subtitle={global.tunai}
            icon={
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Dekorasi Background Bawah */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none rotate-180">
        <div className="grid grid-cols-2 gap-1">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-bj-orange rounded-tr-full"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

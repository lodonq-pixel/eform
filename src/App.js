import React from 'react';
import TransactionCard from './components/TransactionCard';

function App() {
  return (
      <div className="min-h-screen bg-white relative overflow-hidden font-sans flex flex-col items-center justify-center p-6">

        {/* Dekorasi Background Atas (Abstrak) */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none">
          <div className="grid grid-cols-2 gap-1">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="w-16 h-16 bg-bj-orange rounded-tr-full"></div>
            ))}
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mr-2">e-Form</h1>
          <div className="flex items-center border-l-2 border-gray-300 pl-4">
            <div className="text-bj-orange mr-1">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 4.5L18.5 19h-13L12 6.5z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs font-semibold text-gray-600">Bank</span>
              <span className="text-xl font-black text-gray-900">Jakarta</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center w-full max-w-md">
          <h2 className="text-lg font-bold text-gray-700 mb-6">Jenis Transaksi</h2>

          <div className="flex gap-4 justify-center">
            <TransactionCard
                title="Setoran"
                subtitle="Tunai"
                icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.651 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.407-2.651-1M12 16H9m3 0h3"/></svg>}
            />
            <TransactionCard
                title="Tarikan"
                subtitle="Tunai"
                icon={<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>}
            />
          </div>
        </div>

        {/* Dekorasi Background Bawah */}
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none rotate-180">
          <div className="grid grid-cols-2 gap-1">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="w-16 h-16 bg-bj-orange rounded-tr-full"></div>
            ))}
          </div>
        </div>

      </div>
  );
}

export default App;
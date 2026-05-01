import React from 'react';

const TransactionCard = ({ icon, title, subtitle }) => {
    return (
        <button className="flex items-center p-4 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow w-full max-w-[200px]">
            <div className="bg-bj-orange p-3 rounded-xl mr-4 text-white">
                {icon}
            </div>
            <div className="text-left">
                <p className="font-bold text-gray-800 leading-tight">{title}</p>
                <p className="font-bold text-gray-800 leading-tight">{subtitle}</p>
            </div>
        </button>
    );
};

export default TransactionCard;
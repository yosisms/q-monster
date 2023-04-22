import React from 'react';

export interface ISpinnerProps {
}

const Spinner: React.FC<ISpinnerProps> = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
        </div>
    )
};

export default Spinner;
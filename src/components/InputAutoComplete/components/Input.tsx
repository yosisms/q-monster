import React from 'react';
import { useComponentContext } from "@/components/InputAutoComplete";

export interface IInputProps {
}

export const Input: React.FC<IInputProps> = () => {
    const { value, setValue, Spinner, isLoading } = useComponentContext();
    return (
        <div className={'flex'}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={'border-2 border-blue-500 p-2 rounded text-gray-700'}
            />
            {isLoading && Spinner }
        </div>
    )
};


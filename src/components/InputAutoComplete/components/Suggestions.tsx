import React, {useEffect} from 'react';
import {useComponentContext} from "@/components/InputAutoComplete";
import useDebounce from "@/hooks/useDebounce";

export interface ISuggestionsProps {
}

export const Suggestions: React.FC<ISuggestionsProps> = () => {
    const {onChoose, value, fetchRequest, suggestionsList, setSuggestionsList, setIsLoading} = useComponentContext();

    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        setIsLoading(true);
        fetchRequest(debouncedValue).then((data) => {
            setSuggestionsList(data);
            setIsLoading(false);
        });
    }, [debouncedValue, fetchRequest, setSuggestionsList, setIsLoading]);

    return <div className={'text-teal-700'}>
        {suggestionsList.map((item) => (<div onClick={() => onChoose(item)} key={item.value}>{item.label}</div>))}
    </div>;
}
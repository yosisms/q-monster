import React, {useState} from 'react';
import {Context} from "@/components/InputAutoComplete/contexts/Context";
import { Input as InputComponent } from "@/components/InputAutoComplete/components/Input";
import { Suggestions as SuggestionsComponent } from "@/components/InputAutoComplete/components/Suggestions";
import SpinnerComponent from "@/components/Spinner/Spinner";
import {Props} from "@/components/InputAutoComplete";

export function Container({ value, setValue, fetchRequest, onChoose, Input = <InputComponent />, Suggestions = <SuggestionsComponent />, Spinner = <SpinnerComponent /> }: Props) {
    const [suggestionsList, setSuggestionsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Context.Provider value={{
            value,
            setValue,
            onChoose,
            suggestionsList,
            setSuggestionsList,
            fetchRequest,
            Spinner,
            isLoading,
            setIsLoading
        }}>
            {Input}
            {Suggestions}
        </Context.Provider>
    )
}

Container.Input = InputComponent;
Container.Suggestions = SuggestionsComponent;

import React from "react";

export type ReactState<T> = (value: (((prevState: T) => T) | T)) => void;

export interface Props {
    // apiRequest: () => Promise<any>;
    // valueKey: string;
    // labelKey: string;
    value: string;
    setValue: ReactState<string>;
    fetchRequest: (input: string) => Promise<TSuggestionsListItem[]>;
    onChoose: (value: TSuggestionsListItem) => void;
    Input?: React.ReactNode;
    Suggestions?: React.ReactNode;
    Spinner?: React.ReactNode;
}

export type TSuggestionsListItem = {
    value: any;
    label: string;
}

export type ContextType = null | {
    suggestionsList: TSuggestionsListItem[];
    setSuggestionsList: ReactState<TSuggestionsListItem[]>;
    isLoading: boolean;
    setIsLoading: ReactState<boolean>;
} & Pick<Props, 'onChoose' | 'value' | 'setValue' | 'fetchRequest' | 'Spinner'>;

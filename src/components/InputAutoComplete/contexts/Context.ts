import { createContext, useContext } from 'react';
import {ContextType} from "@/components/InputAutoComplete/typescript/types";
// import { TabContextType } from '../index';

export const Context = createContext<ContextType>(null); // TODO: type this

export function useComponentContext () {
    const context = useContext(Context);
    if (!context) {
        throw new Error('InputAutoComplete.* components must be rendered within a InputAutoComplete component');
    }
    return context;
}

// Type definitions for React-Tags (react-tag-input) 6.1
// Project: https://github.com/prakhar1989/react-tags
// Definitions by: Ogglas <https://github.com/Ogglas>
//                  Jan Karres <https://github.com/jankarres>
//                  Matthew Berryman <https://github.com/matthewberryman>
//                  Matthew Cavender <https://github.com/visionsofparadise>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface Tag {
    id: string;
    text: string;
}

export interface ReactTagsProps {
    tags?: Tag[];
    suggestions?: Tag[];
    delimiters?: number[];
    placeholder?: string;
    labelField?: string;

    handleAddition: ((tag: { id: string, text: string }) => void);
    handleDelete: ((i: number) => void);
    handleDrag?: ((tag: { id: string; text: string; }, currPos: number, newPos: number) => void);
    handleFilterSuggestions?: ((textInputValue: string, possibleSuggestionsArray: Tag[]) => Tag[]);
    handleTagClick?: ((i: number) => void);

    autofocus?: boolean;
    allowDeleteFromEmptyInput?: boolean;
    handleInputChange?: ((value: string) => void);
    handleInputFocus?: ((value: string) => void);
    handleInputBlur?: ((textInputValue: string) => void);
    minQueryLength?: number;
    removeComponent?: React.Component<any, any>;
    autocomplete?: boolean | 1;
    readOnly?: boolean;

    name?: string;
    id?: string;
    maxLength?: number;

    inline?: boolean;
    inputFieldPosition?: 'top' | 'bottom' | 'inline';
    allowUnique?: boolean;
    allowDragDrop?: boolean;
    renderSuggestion?(tag: Tag, query: string): React.ReactChild | void;

    classNames?: {
        tags?: string;
        tagInput?: string;
        tagInputField?: string;
        selected?: string;
        tag?: string;
        remove?: string;
        suggestions?: string;
        activeSuggestion?: string;
    };
}

export class WithContext extends React.Component<ReactTagsProps> { }
export class WithOutContext extends React.Component<ReactTagsProps> { }

export default WithContext;

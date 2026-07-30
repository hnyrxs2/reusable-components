import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type React from 'react';

interface UIState {
    popUpMenu: {
        items: string[]
    },
    overlay: {
        isOpen: boolean;
        contents: React.JSX.Element[] | [];
        visibleContent: React.JSX.Element | null;
    }
};

const initialState: UIState = {
    popUpMenu: {
        items: ['About', 'Projects', 'Services', 'Contact Us']
    },
    overlay: {
        isOpen: false,
        contents: [],
        visibleContent: null
    }
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setPopUpItems(state, action: PayloadAction<string[]>) {
            state.popUpMenu.items = action.payload;
        },
        setOverlayContents(state, action: PayloadAction<React.JSX.Element[]>) {
            state.overlay.contents = action.payload;
        },
        openOverlay(state, action: PayloadAction<{index: number}>) {
            const { index } = action.payload;
            state.overlay.isOpen = true;
            state.overlay.visibleContent = state.overlay.contents[index];
        },
        closeOverlay(state) {
            state.overlay.isOpen = false;
            state.overlay.visibleContent = null;
        }
    }
});

export const { openOverlay, closeOverlay, setOverlayContents } = uiSlice.actions;
export default uiSlice.reducer;

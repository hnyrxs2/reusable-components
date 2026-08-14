import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type React from 'react';

export type ThemeTypes = 'light' | 'dark';
interface UIState {
  popUpMenu: {
    items: string[];
  };
  overlay: {
    isOpen: boolean;
    contents: React.JSX.Element[] | [];
    visibleContent: React.JSX.Element | null;
  };
  theme: {
    type: ThemeTypes;
  };
}
const initialState: UIState = {
  popUpMenu: {
    items: ['About', 'Projects', 'Services', 'Contact Us'],
  },
  overlay: {
    isOpen: false,
    contents: [],
    visibleContent: null,
  },
  theme: {
    type: 'light',
  },
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
    openOverlay(state, action: PayloadAction<{ index: number }>) {
      const { index } = action.payload;
      state.overlay.isOpen = true;
      state.overlay.visibleContent = state.overlay.contents[index];
    },
    closeOverlay(state) {
      state.overlay.isOpen = false;
      state.overlay.visibleContent = null;
    },
    setTheme(state, action: PayloadAction<ThemeTypes>) {
      state.theme.type = action.payload;
    },
  },
});

export const { openOverlay, closeOverlay, setOverlayContents, setTheme } = uiSlice.actions;
export default uiSlice.reducer;

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type React from 'react';
import { CollapsibleSections } from '../pages/types';
import { withArgs } from './helpers';

export type ThemeTypes = 'light' | 'dark';
export interface ICollapsibleSection {
  [id: string]: {
    collapsed: boolean;
  };
}
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
  collapsibleSections: ICollapsibleSection;
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
  collapsibleSections: {
    [CollapsibleSections.ButtonConfig]: {
      collapsed: false,
    },
    [CollapsibleSections.ButtonPreview]: {
      collapsed: false,
    },
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
    expandCollapseSection: withArgs<UIState>()(
      (id: string, collapsed: boolean) => ({ id, collapsed }),
      (state, action) => {
        const { id, collapsed } = action.payload;
        state.collapsibleSections = {
          ...state.collapsibleSections,
          [id]: { collapsed },
        };
      }
    ),
  },
});

export const { openOverlay, closeOverlay, setOverlayContents, setTheme, expandCollapseSection } =
  uiSlice.actions;
export default uiSlice.reducer;

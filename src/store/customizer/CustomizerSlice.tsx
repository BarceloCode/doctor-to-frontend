import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  activeDir?: string | any;
  activeMode?: string; // This can be light or dark
  activeTheme?: string; // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
  SidebarWidth?: number;
  MiniSidebarWidth?: number;
  TopbarHeight?: number;
  isCollapse?: boolean;
  isLayout?: string;
  isSidebarHover?: boolean;
  isMobileSidebar?: boolean;
  isHorizontal?: boolean;
  isLanguage?: string;
  isCardShadow?: boolean;
  borderRadius?: number | any;
  isLoadding?: boolean | any;
  toast: object | any;
}

const initialState: StateType = {
  activeDir: "ltr",
  activeMode: "light", // This can be light or dark
  activeTheme: "BLUE_THEME", // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
  SidebarWidth: 270,
  MiniSidebarWidth: 87,
  TopbarHeight: 156,
  isLayout: "boxed", // This can be full or boxed
  isCollapse: false, // to make sidebar Mini by default
  isSidebarHover: false,
  isMobileSidebar: false,
  isHorizontal: false,
  isLanguage: "es",
  isCardShadow: true,
  borderRadius: 7,
  isLoadding: false,
  toast: {},
};

export const CustomizerSlice = createSlice({
  name: "customizer",
  initialState,
  reducers: {
    setTheme: (state: StateType, action) => {
      state.activeTheme = action.payload;
    },
    setDarkMode: (state: StateType, action) => {
      state.activeMode = action.payload;
    },

    setDir: (state: StateType, action) => {
      state.activeDir = action.payload;
    },
    setLanguage: (state: StateType, action) => {
      // console.log(state.isLanguage);
      // console.log(action.payload, "äsdsa");

      state.isLanguage = action.payload;
    },
    setCardShadow: (state: StateType, action) => {
      state.isCardShadow = action.payload;
    },
    toggleSidebar: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    hoverSidebar: (state: StateType, action) => {
      state.isSidebarHover = action.payload;
    },
    toggleMobileSidebar: (state) => {
      state.isMobileSidebar = !state.isMobileSidebar;
    },
    toggleLayout: (state: StateType, action) => {
      state.isLayout = action.payload;
    },
    toggleHorizontal: (state: StateType, action) => {
      state.isHorizontal = action.payload;
    },
    setBorderRadius: (state: StateType, action) => {
      state.borderRadius = action.payload;
    },
    setLoadder: (state: StateType, action) => {
      state.isLoadding = action.payload;
    },
    setToast: (state: StateType, action) => {
      state.toast = action.payload;
    },
  },
});

export const {
  setTheme,
  setDarkMode,
  setDir,
  toggleSidebar,
  hoverSidebar,
  toggleMobileSidebar,
  toggleLayout,
  setBorderRadius,
  toggleHorizontal,
  setLanguage,
  setCardShadow,
  setLoadder,
  setToast,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;

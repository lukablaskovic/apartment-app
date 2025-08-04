// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { md2 } from "vuetify/blueprints";

// Vuetify
import { createVuetify } from "vuetify";

const theme = {
  dark: false,
  colors: {
    background: "#e0e0e0",

    /*
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    */
  },
};

export default createVuetify({
  blueprint: md2,
  theme: {
    defaultTheme: "theme",
    themes: {
      theme,
    },
  },
  display: {
    mobile: "sm",
    thresholds: {
      xs: 0,
      sm: 340,
      md: 540,
      lg: 800,
      xl: 1280,
    },
  },
});

/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { defaults } from "@/theme/defaults";
import { aliases, custom } from "@/theme/customIcons";
import { LIGHT_THEME, light, dark } from "@/theme/themes";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults,
  // add theme
  theme: {
    defaultTheme: LIGHT_THEME,
    themes: {
      light,
      dark,
    },
    // add color variations
    //   variations: {
    //     colors: ["primary", "secondary"],
    //     lighten: 3,
    //     darken: 3,
    //   },
  },
  // Add the custom iconset
  icons: {
    defaultSet: "custom",
    aliases,
    sets: {
      custom,
    },
  },
});

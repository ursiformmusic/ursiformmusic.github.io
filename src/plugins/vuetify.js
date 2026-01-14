// vuetify.js or plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'pnwTwilight',
    themes: {
      pnwTwilight: {
        dark: true,
        colors: {
          background: '#0a0f0d',       // very dark forest floor
          surface: '#111916',          // dark mossy surface
          primary: '#3a6b5e',          // deep teal-green (ocean/forest)
          'primary-darken-1': '#2c5247',
          secondary: '#1e3a5a',        // navy blue twilight
          accent: '#7a9a8a',           // soft moss green
          earthy: '#5c4a2e',           // cedar bark brown
          info: '#4a7c9c',             // misty blue-gray
          muted: '#a8b5aa',            // light fog gray (for text)
        },
      },
    },
  },
})

// colors: {
//           background: '#0a0f0d',       // very dark forest floor
//           surface: '#111916',          // dark mossy surface
//           primary: '#3a6b5e',          // deep teal-green (ocean/forest)
//           'primary-darken-1': '#2c5247',
//           secondary: '#1e3a5a',        // navy blue twilight
//           accent: '#7a9a8a',           // soft moss green
//           earthy: '#5c4a2e',           // cedar bark brown
//           info: '#4a7c9c',             // misty blue-gray
//           muted: '#a8b5aa',            // light fog gray (for text)
//         },
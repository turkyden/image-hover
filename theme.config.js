// theme.config.js

const { ThemeManager, Theme } = require('tailwindcss-theming/api');

const base = new Theme()
  .setName('light')
  .targetable()
  .addColors({
    brand: '#48bb78',             // Your brand color
    'on-brand': '#ffffff',        // For everything that goes on your brand color
    background: '#f7fafc',        // A background color
    'on-background': '#1a202c',    // For everything that goes on your background color
    highlightjs: '#2d3748',
    'on-highlightjs': '#d5d8da',
  });

const dark = new Theme()
  .setName('dark')
  .targetable()
  .addColors({
    brand: '#48bb78',             // Your brand color
    'on-brand': '#ffffff',        // For everything that goes on your brand color
    background: '#2d3748',        // A background color
    'on-background': '#d5d8da',    // For everything that goes on your background color
    highlightjs: '#2d3748',
    'on-highlightjs': '#d5d8da'
  });

module.exports = new ThemeManager()
  .setDefaultTheme(base)          // Sets the `base` theme as the default theme.
  .setDefaultDarkTheme(dark);     // Sets the `dark` theme as the default theme for users that prefer the `dark` scheme.

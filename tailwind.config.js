/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{php,html,js,jsx,ts,tsx,vue}',
    './resources/**/*.{php,html,js,jsx,ts,tsx,vue}',
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: ['style-loader', 'css-loader', 'sass-loader'],
  //     },
  //   ],
  // },
  theme: {
    extend: {},
  },
  plugins: [],
};

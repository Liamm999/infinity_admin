import tailwindConfig from './tailwind.config';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

export const postcssConfig = {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};

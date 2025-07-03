import { output } from 'framer-motion/client';
import next from 'next';
import { config } from 'process';

/** @type {import('postcss').Config} */
const config = {
  plugins: {
    output: "export",
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;

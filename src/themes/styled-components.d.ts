/* eslint-disable @typescript-eslint/no-empty-interface */
import { StyledTheme } from './StyledTheme';

type ThemeInterface = typeof StyledTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}

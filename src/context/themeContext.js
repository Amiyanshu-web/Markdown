import { createContext } from 'react';
import { getTheme } from '../helpers/utils';

const theme = getTheme();

export const ThemeContext = createContext(theme);

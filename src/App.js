import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { DARK } from './constants/constants';

import { ThemeContext } from './context/themeContext';

import Header from './Header';

import { getTheme } from './helpers/utils';

import { useTheme } from './hooks/useTheme';

const savedTheme = getTheme();



// const LightTheme={
//   pageBackground: "white",
//   titleColor:"#dc658b",
//   tagLineColor:"black"
// };

// const DarkTheme={
//   pageBackground: "#282c36",
//   titleColor:"lightpink",
//   tagLineColor:"lavender"
// };

// const themes = {
//  light: LightTheme,
//  dark: DarkTheme
// }


//functional component
function App() {
  
  const [markdown, setMarkdown] = useState('## markdown preview')
  
  const [theme,resetTheme] = useTheme(savedTheme);



  return (
    
    <ThemeContext.Provider value={{ theme, resetTheme }}>
    <main className={`container ${theme === DARK ? theme : null}`}>
      <Header />
      <section className='markdown'>
        <div className={`markdown_editor ${theme === DARK ? theme : null}`}>
          <div className={`editor_heading ${theme === DARK ? theme : null}`}>
            Markdown Editor
          </div>
          <textarea
            className={`input ${theme === DARK ? theme : null}`}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            rows='15'></textarea>
        </div>
        <article
            className={`markdown_result ${theme === DARK ? theme : null}`}>
            <div className={`editor_heading ${theme === DARK ? theme : null}`}>
              Markdown Result
            </div>
            <ReactMarkdown
              className={`output ${theme === DARK ? theme : null}`}>
              {markdown}
            </ReactMarkdown>
          </article>
        </section>
      </main>
    </ThemeContext.Provider>

  
  )}

export default App

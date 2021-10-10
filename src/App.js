// import React, { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import { DARK } from './constants/constants';
// import { ThemeContext } from './context/themeContext';
// import Header from './Header';
// import { getTheme } from './helpers/utils';

// //custom hook
// import { useTheme } from './hooks/useTheme';

// const savedTheme = getTheme();

// //functional component

// const initialTemplate = `# Project title

// A brief description of the project.

// ## Demo

// Insert gif or link to The demo.

// ## Built With

// This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgments section. Here are a few examples.

// * [Next.js](https://nextjs.org/)
// * [React.js](https://reactjs.org/)
// * [Vue.js](https://vuejs.org/)
// * [Angular](https://angular.io/)
// * [Svelte](https://svelte.dev/)
// * [Laravel](https://laravel.com)
// * [Bootstrap](https://getbootstrap.com)
// * [JQuery](https://jquery.com)




// ## Installation

// Install my-project with npm

// \`\`\`bash
//   npm install my-project
//   cd my-project
// \`\`\`

// ## Run Locally

// Clone the project

// \`\`\`bash
//   git clone https://link-to-project
// \`\`\`

// Go to the project directory

// \`\`\`bash
//   cd my-project
// \`\`\`

// Install dependencies

// \`\`\`bash
//   npm install
// \`\`\`

// Start the server

// \`\`\`bash
//   npm run start
// \`\`\`


// ## Usage/Examples

// \`\`\`javascript
// import Component from 'my-project'

// function App() {
//   const [markdown, setMarkdown] = useState('## markdown preview');
//   const [theme, toggleTheme] = useTheme(savedTheme);


// }
// \`\`\`

// ## Contributing

// Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

// If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
// Don't forget to give the project a star! Thanks again!

// 1. Fork the Project
// 2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
// 3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
// 4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
// 5. Open a Pull Request
// ## License

// [MIT](https://choosealicense.com/licenses/mit/)`;

// function App() {
//   const [markdown, setMarkdown] = useState(initialTemplate);
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <main className={`container ${theme === DARK ? theme : null}`}>
//         <Header />
//         <section className='markdown'>
//           <div className={`markdown_editor ${theme === DARK ? theme : null}`}>
//             <div className={`editor_heading ${theme === DARK ? theme : null}`}>
//               Markdown Editor
//             </div>
//             <textarea
//               className={`input ${theme === DARK ? theme : null}`}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               rows='10'></textarea>
//           </div>
//           <article
//             className={`markdown_result ${theme === DARK ? theme : null}`}>
//             <div className={`editor_heading ${theme === DARK ? theme : null}`}>
//               Markdown Result
//             </div>
//             <ReactMarkdown
//               className={`output ${theme === DARK ? theme : null}`}>
//               {markdown}
//             </ReactMarkdown>
//           </article>
//         </section>
//       </main>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

import React, { useState,useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { DARK } from './constants/constants';
import { ThemeContext } from './context/themeContext';
import Header from './Header';
import { getTheme } from './helpers/utils';

//custom hook
import { useTheme } from './hooks/useTheme';

const savedTheme = getTheme();

//template
const initialTemplate = `# Project title

A brief description of the project.

## Demo

Insert gif or link to The demo.

## Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgments section. Here are a few examples.

* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Svelte](https://svelte.dev/)
* [Laravel](https://laravel.com)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)




## Installation

Install my-project with npm

\`\`\`bash
  npm install my-project
  cd my-project
\`\`\`

## Run Locally

Clone the project

\`\`\`bash
  git clone https://link-to-project
\`\`\`

Go to the project directory

\`\`\`bash
  cd my-project
\`\`\`

Install dependencies

\`\`\`bash
  npm install
\`\`\`

Start the server

\`\`\`bash
  npm run start
\`\`\`


## Usage/Examples

\`\`\`javascript
import Component from 'my-project'

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');
  const [theme, toggleTheme] = useTheme(savedTheme);


}
\`\`\`

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request
## License

[MIT](https://choosealicense.com/licenses/mit/)`;
//functional component
function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');
  const [theme, toggleTheme] = useTheme(savedTheme);
  const [template,setTemplate] = useState(initialTemplate);
  const [isTemplate,setIsTemplate] = useState(false);
  const [copySuccess,setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  const handleChange = (e) => {
    isTemplate ? setTemplate(e.target.value) : setMarkdown(e.target.value);
  }
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={`container ${theme === DARK ? theme : null}`}>
        <Header />
        <section className='markdown'>
          <div className={`markdown_editor ${theme === DARK ? theme : null}`}>
            <div className={`editor_heading ${theme === DARK ? theme : null}`}>
              Markdown Editor
              <div>
                <button className="templatebtn" onClick={()=>setIsTemplate(!isTemplate)}>Template</button>
                <button className="copybtn" onClick={copyToClipboard}>Copy</button>
                {copySuccess}
              </div>
            </div>
            <textarea
               ref={textAreaRef}
              className={`input ${theme === DARK ? theme : null}`}
              value={isTemplate?template:markdown}
              onChange={(e) => handleChange(e)}
              rows='10'></textarea>
          </div>
          <article
            className={`markdown_result ${theme === DARK ? theme : null}`}>
            <div className={`editor_heading ${theme === DARK ? theme : null}`}>
              Markdown Result
            </div>
            <ReactMarkdown
              className={`output ${theme === DARK ? theme : null}`}>
              {isTemplate?template:markdown}
            </ReactMarkdown>
          </article>
        </section>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
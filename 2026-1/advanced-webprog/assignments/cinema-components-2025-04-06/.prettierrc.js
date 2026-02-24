/**
 * Prettier configuration for the project
 * https://prettier.io/docs/en/options.html
 */
export default {
  // Maximum line length before wrapping
  printWidth: 100,
  
  // Use 2 spaces for indentation
  tabWidth: 2,
  
  // Use spaces instead of tabs
  useTabs: false,
  
  // Print semicolons at the ends of statements
  semi: true,
  
  // Use single quotes instead of double quotes
  singleQuote: true,
  
  // Change when properties in objects are quoted
  // "as-needed" - Only add quotes around object properties where required
  quoteProps: 'as-needed',
  
  // Use single quotes instead of double quotes in JSX
  jsxSingleQuote: false,
  
  // Print trailing commas wherever possible in multi-line comma-separated syntactic structures
  // "all" - Trailing commas wherever possible (arrays, objects, etc.)
  trailingComma: 'all',
  
  // Print spaces between brackets in object literals
  bracketSpacing: true,
  
  // Put the > of a multi-line JSX element at the end of the last line instead of alone on the next line
  bracketSameLine: false,
  
  // Include parentheses around a sole arrow function parameter
  // "always" - Always include parens: (x) => x
  arrowParens: 'always',
  
  // Format only a segment of a file
  // rangeStart: 0, // Format from beginning
  // rangeEnd: Infinity, // Format until end
  
  // Specify which parser to use
  // Will try to detect from file type (no need to set explicitly)
  // parser: 'babel', 
  
  // Specify the file path to consider it for specific parser
  // filepath: undefined,
  
  // Don't look for .prettierrc to override settings
  requirePragma: false,
  
  // Don't insert @format pragma at the top of formatted files
  insertPragma: false,
  
  // Control how Prettier will wrap prose
  // "preserve" - Wrap prose as-is
  proseWrap: 'preserve',
  
  // Set the global whitespace sensitivity for HTML files
  // "css" - Respect the default value of CSS display property
  htmlWhitespaceSensitivity: 'css',
  
  // Control whether Prettier formats quoted code embedded in the file
  embeddedLanguageFormatting: 'auto',
  
  // Enforce single attribute per line in HTML, Vue and JSX
  singleAttributePerLine: false,
  
  // End of line format
  endOfLine: 'lf',
  
  // Plugins to extend Prettier
  // plugins: [],
}; 
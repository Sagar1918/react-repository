# React Projects

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Parcel has File watching algorithm
- Caching - Faster builds
- It will minify the code for production build
- Bundling - Bundle all the files into a single file
- Image optimization
- Code Splitting
- Differential Bundling - Support older browsers
- Error Handling
- Tree shaking - remove unused code

# Babel

- Babel is typically used as a build tool, which means that it is integrated into your build process. When you run your build process, Babel will transpile your JavaScript code based on the browserslist configuration.
- Which means Babel uses the browserslist configuration to transpile modern JavaScript code into code that can run in older browsers, making it easier to write modern code while still supporting older browsers.

# Two types of import/export

-Default import/export
export default ComponentName
import Component from "path"
Note: We cannot export more than one using default

-Named import/export
export const Component
import {Component} from "path"
Note: We can export as many by using Named export

# useState Hook

- Whenever a state variable updates, react triggers a reconciliation cycle(re-renders the component)

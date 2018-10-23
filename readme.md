Monorepo Starter Kit - React(es6) compatible
lernajs

Summary:
inside the repo there are 3 packages 
    * common-ui
    * common-data
    * utils
    * playground

playground is a create-react-app package,
that uses common-ui, common-data, and utils as node_modules to build its own application
inside playground/src/App.js you will find imports from these packages
the components inside common-ui are compiled to es5 using webpack and babel-loader and are outputted to dist folder
this allows importing react components and using them in dev and prod without compiling errors, while still being able to write the code in es6.
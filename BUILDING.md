# Building

Building is necessary to compile the minified version intended to run in web browsers and to generate API documentation.

Building works the same on all platforms:
```
npm run build
```
This will lint the sources, test the sources, compile dist files, test everything and generate documentation files.

There **must** be no errors or warnings during the build.

The API documentation is generated in the *docs/* folder.

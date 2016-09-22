# Responsive Web 2 - Alexander D'Este - Tenta 22/9 2016
 Git repository for examination in course Responsive Webdesign on date 2016-09-22.

# DEVELOPERS
## installation
This package uses composer and npm. We'll assume you have those installed.  
To install, run the following from root. This might take a while.
```bash
yes | composer install && npm install
```

## How to run project by starting PatternLab
0. To build PatternLab files and watch for changes, open your terminal and run the following from the root of this app
```Shell
php core/console --server --with-watch
```
0. go to `http://localhost:8080` in your favorite browser.

Use CTRL+C to terminate the server.

## How to run js tests
Simply run this in the root directory
```Shell
npm t
```

## Visual Regression Testing using backstop
Whenever you're pleased with the loop on the site, run this from the root of this directory. This will generate screenshots for reference
```Shell
npm run backstop:ref
```

After making some changes, type code below in the terminal to show you the differences from reference to test. This is useful to test if any new CSS changes break accepted working design concepts that worked in the reference.
```Shell
npm run backstop:test
```

## Performance budget with Gulp-Louis
Print code below in the terminal from the root of the app
```Shell
gulp louis
```
Result will show in the terminal

*Thanks to Sandra for making the base of the README file*

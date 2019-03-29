
HERE ARE SOME UTILIY COMMANDS
    TO SAVE TO LOCAL MACHINE
        Just hit control+s
    TO RUN THE BUILD LOCALLY
        Just type "npm start"
    TO PUSH THE BUILD FROM LOCAL TO THE MASTER
        git add .
        git commit -m "MSG"
        git push origin master
    TO PUSH THE BUILD FROM LOCAL TO THE WEBSITE
        ng build --prod --base-href https://yasharya11.github.io/Demonic-ScvHunt0331/dist
        ngh --dir dist/Demonic-ScvHunt0331/

Objective:
    *   We will all meet in person for a begin of game meeting, I WILL GIVE OUT GAME-BEGIN-CODE: XXXX
    *   Users will enter the site and be welcomed by the demonic logo and a short have fun be safe message... below that will be the "Enter Game" button
    *   Once the user has entered the game, THEY MUST ENTER GAME-BEGIN-CODE: XXXX, errors will show if the code is incorrect, otherwise THE-DOOR1 will show along with the riddle
    *   Given the right code, they will be shown a riddle (Example:"what is 2+2") following a place to put an answer (example: 4), if they guess incorrectly, they will be shown a "try again" gif, otherwise THE-DOOR1 they will be shown the first address to go to!
    *   Once the user has shown up to the first location, there will be a demonic girl there with a code that will unlock the next riddle.

Object Schema:
    Question Object:{
        riddleNum: "1",
        beginCode: "XXXX",
        bcIsCorrect = "false",
        riddle: "What does 2+2 equal?",
        answer: "4",
        ansIsCorrect: "false"
    }

=====================================================================================================================================================
# DemonicScvHunt0331

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

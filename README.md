

# Run App

1. Install dependencies with `npm install`
2. Start the project by `npm start`
3. The browser window should pop up with http://localhost:8080


# Architecture

The simplest and fastest implementation obviously as the time is very constrained. For the same reason, I did not use Typescript because it takes a little bit more typing. Otherwise, I would use it for a larger project.

Lately, I tend to realize that using vanilla Javascript over a framework (like React) would be similar or even less verbose. So I would take any chance to do things without any library to verify this.

Also, I do prefer a functional style over OOP, so I did not define any classes.

Rest is the standard stuff: Model View Controller architecture.


# Requirements

Your task is to implement a single-page web application for sticky notes. You are required to implement at least 3 of the following 4 features:

1. Create a new note of the specified size at the specified position.
2. Change note size by dragging.
3. Move a note by dragging.
4. Remove a note by dragging it over a predefined "trash" zone.

You are encouraged to think about the best UI for these features that is possible to implement in the specified timeframe.

System requirements:

1. The web application is intended to be used on desktop. Minimum screen resolution: 1024x768.
2. The following browsers should be supported: latest versions of Google Chrome (Windows and Mac), Mozilla Firefox (all platforms), Microsoft Edge.

Technologies:

1. Language: Javascript (ES 5.1 or newer), Typescript or Kotlin.JS.
2. We restrict the libraries you can use to this set:
   - jQuery (without jQuery UI);
   - underscore;
   - React (without components and additional libraries).
     The general idea is to avoid using readymade solutions, so that we can fully assess how you design and engineer solutions in the scope of a small task like this.
3. If your project requires building, provide the necessary instructions.

Instructions:

1. Entering/editing note text.
2. Moving notes to front (in case of overlapping notes).
3. Saving notes to local storage (restoring them on page load).
4. Different note colors.
5. Saving notes to REST API. Note: you're not required to implement the API, you can mock it, but the mocks should be asynchronous.

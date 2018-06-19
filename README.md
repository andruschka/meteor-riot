# Riot for Meteor

This package allows you to use [Riot](http://riotjs.com/), a React-like user interface micro-library, in your Meteor application, as a replacement for Blaze.

This package does 2 things:
- it compiles all the Riot .tag files in your project to plain Javascript, using the riot compliler
- it creates a small Riot mixin under 'Meteor.riotMixin' to use reactive data sources inside a Riot tag

You only have to add the riot script tag to the head section of your app.
`<script src="https://cdn.jsdelivr.net/npm/riot@3.1/riot.min.js"></script>`

# Why use Riot?

Because it is easy to learn, easy to use, and it is tiny, especially when compared to React or Blaze.

You can build your whole UI using [Riot](http://riotjs.com/), and get rid of Blaze or React.

    meteor remove blaze-html-templates jquery
    meteor add static-html benoit:riot

# The autorun mixin

In your tag, define a method named "autorun", and add the autorun mixin __*after*__ the method definition like: `this.mixin(Meteor.riotMixin)`.

Your autorun method will run inside a Meteor computation (using the Tracker object), and so it can use reactive data sources. 

When a data source changes, your method will run again, and the mixin automaticaly updates your tag.

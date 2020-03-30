# Precourse: Bacefook

Previously you have recreated mockups with HTML and CSS, and used JavaScript to solve algorithm-style problems.

In this assignment you will combine all the skills you have learned to create a social media app called **Bacefook**. 👨‍📚

## Objectives

* Use query selectors to obtain references to DOM elements
* Register callbacks as event handlers
* Use arrow functions or bind() to keep reference to this
* Save 💾 to and load items from local storage
* Create elements, set their attributes, append them to the DOM
* Use `setTimeout` and `clearTimeout` to perform dynamic updates
* Use moment.js to format timestamps ⏱
* Use window.onload() to run code after initialization

## Background

Some code has already been written for you:

* `data_generator.js` - simulates creation of post data
* `app.js` - displays the data in your feed

You don't need to understand the code that's in `data_generator.js` to complete the basic requirements, but here's an overview of what it does:

It creates two global variables-- `bacefook` and `friends`. `friends` is just an array of strings representing the friends you have on your Bacefook. The `bacefook` variable is an object with two properties: `friends` and `newsfeed`. `newsfeed` is an array of objects with each object representing a Bacefook post. Each post object has the following: `friend`, `text`, `feeling`, `link`, `image` and `timestamp`.

`friends` 👭👫 is an object that contains all of your friends as the keys and their values as the various posts attributed to them.

When a post object is created, it gets added to both your `bacefook.newsfeed` array and to the respective friend array. So a post object 'written' by Kani will get added both to your Bacefook and also to the array found at `bacefook.friends.kani`

`data_generator.js` also kicks off a periodic process that adds more data into your newsfeed.

## Basic Requirements

>**Note** 🐱 This repository does not have mia tests, so your pull requests will be merged manually 🐱

**Please do not use jQuery for this exercise.**

Begin by opening `index.html` in Chrome to verify that you can see 👀 the posts.

- [ ] Show the new Bacefook posts. You can either show them automatically as they're created or add a button that refreshes to show the new posts.
- [ ] Display the timestamps of when the posts were created
- [ ] Display what the friend is 'feeling' for a post
- [ ] There is an empty array for the variable `images` as well as an empty folder. Add images to the posts that are generated and display them.
- [ ] Style the page to improve its appearance by adding a `css` file. Please do not include styles in-line HTML.
- [ ] Show when the posts were created in a human friendly way (e.g. "posted 5 minutes ago"). Include [`moment.js`](https://momentjs.com/) as a script.
- [ ] Add a form so the user can add their own posts.
- [ ] At the top of `app.js`, there is a check to see if there is a username stored in `localStorage`. Have the username display somewhere on the page.

## Advanced Requirements

- [ ] Make this look as close as possible to the real Facebook newsfeed.
# carlosiusalazar-gmail.com
# Facebook-clone

/*
  This generates our fake newsfeed information.

  There is no need to touch the code in here until you get to basic requirement #4,
  but please check it out to familiarize yourself beforehand.
*/
//When a post object is created, it gets added to both your bacefook.newsfeed array and to the respective friend array. So a post object 'written' by Kani will get added both to your Bacefook and also to the array found at bacefook.friends.kani

(() => {
  //debugger

  window.bacefook = {};  //global variable, is an object with two properties: friends and newsfeed
  bacefook.newsfeed = [];  //is an array of objects with each object representing a Bacefook post. Each post object has the following: friend, text, feeling, link, image and timestamp.
  bacefook.friends = {};  //global variable, is an object that contains all of your friends as the keys and their values as the various posts attributed to them.
  bacefook.friends.Meowze = [];
  bacefook.friends.Hana = [];
  bacefook.friends.Kani = [];
  bacefook.friends.Yan = [];
  window.friends = Object.keys(bacefook.friends);

  const getRandomElement = (array) => {
    // Given an array, returns a random element
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const starters = ['totally just', 'just', 'completely', 'waaaaah! i', 'i just', 'a salaryman', 'a salaryman', 'yesterday I', 'a ninja', 'my boss'];
  const verbs = ['ate', 'drank', 'threw up in', 'refactored', 'iterated on', 'thought about', 'threw up on', 'saw', 'walked to', 'got lost in', 'walked into', 'pooped in', 'peed in', 'googled', 'drove', 'ran to', 'worked on', 'slept on', 'slept in'];
  const fillers = ['my', 'your', 'his', 'her', 'my favorite', 'a beautiful', 'a delicious', 'that', 'this', 'an interesting', '', 'the best', 'the greatest', 'a delightful'];
  const nouns = ['code chrysalis', 'restaurant', 'omakase', 'hitomedia', 'family mart', 'private jet', 'mama', 'lawsons', 'conbini', 'whisky', 'onigiri', 'tesla', 'food', 'house', 'toilet', 'tokyo', 'city', 'iphone', 'google', 'unicorn', 'mess', 'pirate ship', 'ninja'];
  const hashtags = ['#codechrysalis', '#techlife', '#startups', '#tokyo', '#japan', '#interesting', '', '#til', '#wtf', '#tgifriday', '#hashtags', '#japanlife', '#oops'];
  const feelings = ['feeling happy 😄', 'feeling smug 😏', 'feeling lovestruck 🥰', 'feeling gross 🤢', 'feeling scared 😰', 'feeling shitty 💩', 'feeling angry 😡', 'feeling frustrated 😫', 'feeling excited 🤩','']
  const images = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg','img/18.jpg','img/19.jpg','img/20.jpg','img/21.jpg','img/22.jpg','img/23.jpg','img/24.jpg','img/25.jpg'];

  const generateRandomText = () => {
    return [
      getRandomElement(starters),
      getRandomElement(verbs),
      getRandomElement(fillers),
      getRandomElement(nouns),
      getRandomElement(hashtags)
    ].join(' ');
  };


  const generatePostObj = () => {
    //let now = moment();
    //now = now.fromNow();
    timestamp = new Date();
    //console.log(moment("20111031", "YYYYMMDD").fromNow())
    //timestamp = moment("20111031", "YYYYMMDD").fromNow();

    return {
      friend: getRandomElement(friends),
      text: generateRandomText(),
      feeling: getRandomElement(feelings),
      image: getRandomElement(images),
      timestamp: timestamp,
      //timestamp: moment().format(),
    };
  };

  const addPost = obj => {
    const friend = obj.friend;
    bacefook.friends[friend].push(obj);
    bacefook.newsfeed.push(obj);
    ///
    //bacefook.friends[friend].pop(obj);
    //bacefook.newsfeed.pop(obj);
  };

  const createPost = () => {
    const newPost = generatePostObj();
    addPost(newPost);
  };

   for (let i = 0; i < 100; i++) {  //Generated 11 posts by default
     createPost();
   }

  const scheduler = () => {
    createPost();
    setTimeout(scheduler, Math.random() * 1000);
    //setTimeout(scheduler,1000);
  };

  //scheduler();
})();
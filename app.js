window.onload = () => {
	// this is a very simple check to see if there's a username stored
//	if (localStorage.getItem('username') === 'null') {
	// prompt for one from user if not

	window.username = window.prompt('What is your name?');
	//temp for testing
	//window.username = 'Carlos Salazar';

	localStorage.setItem('username', username);
//	 } 
	 
	//  else {
	//  	window.username = localStorage.getItem('username');
	//  }

	document.getElementById('userName').innerText = username;
	// console.log(username);
	// console.log(moment().startOf('hour').fromNow())

	const containerEl = document.querySelector('#newsfeed');

	// this just makes things appear
	function loadFeed() {
		//let index = bacefook.newsfeed.length - 1;
		let randomizedIndexOfBaceFook = Math.floor(Math.random() * bacefook.newsfeed.length);
		console.log('bacefook.newsfeed.length', bacefook.newsfeed.length);
		console.log('randomizedIndexOfBaceFook', randomizedIndexOfBaceFook);
		//while (index >= 0) {

		//const post = bacefook.newsfeed[index];
		const post = bacefook.newsfeed[randomizedIndexOfBaceFook];

		const friendEl = document.createElement('div');
		friendEl.className = 'friend';
		friendEl.innerText = post.friend;

		//Timestamp display
		const postTime = document.createElement('div');
		postTime.className = 'postTime';
		postTime.innerText = moment().startOf('minute').fromNow(); //post.timestamp;
		//

		// Feeling
		let feelingPost = document.createElement('div');
		feelingPost.className = 'feelingPost';
		feelingPost.innerText = post.feeling;
		//feelingPost = "Feeling " + feelingPost;
		//

		//Display images
		const postImage = document.createElement('img');
		postImage.src = post.image;

		const postEl = document.createElement('div');

		postEl.className = 'userPost';
		//actual post and hashtag
		//postEl.innerText = post.text;

		//friend name
		//postEl.append(friendEl);
		//containerEl.append(friendEl);
		//containerEl.prepend(friendEl);
		//containerEl.insertAdjacentElement('afterend',friendEl);
		postEl.append(friendEl);

		//appends post time
		//containerEl.prepend(postTime);
		//containerEl.append(postTime);
		postEl.append(postTime);

		//Appends actual post text
		postEl.append(post.text);

		//actual post and ahshtag
		//containerEl.prepend(postEl);
		//containerEl.append(postEl);

		// containerEl.insertAdjacentElement('afterend',postEl);

		//appends feelings
		//containerEl.prepend(feelingPost);
		//containerEl.append(feelingPost);
		postEl.append(feelingPost);

		//appends post Image
		//containerEl.prepend(postImage);
		//containerEl.append(postImage);
		postEl.append(postImage);

		containerEl.prepend(postEl);

		//index -= 1;
		//}  //while end
	}

	const feedScheduler = () => {
		loadFeed();
		setTimeout(feedScheduler, 5000);
	};

	feedScheduler();
};

let attachPhoto = false;
function uploadPhoto() {
	if (attachPhoto === false) {
		attachPhoto = true;
	} else {
		attachPhoto = false;
	}
}

function postingMyPost() {
	if ((userPost = document.getElementById('myTextArea').value)) { //If there is no text in the text area of the post nothing happens. This prevent flooding messages.

		console.log('username', username);
		const containerElUser = document.querySelector('#newsfeed');

		const postElUser = document.createElement('div');
		postElUser.className = 'postElUser';

		//Prepends Post Content
		//Attaches a random photo if the button Add Image was pressed.
		console.log('attachPhoto', attachPhoto);
		if (attachPhoto === true) {
			const postImage = document.createElement('img');

			let randomImageIndex = Math.floor(Math.random() * 25);
			let randomImageSrc = 'img/' + randomImageIndex + '.jpg';

			postImage.src = randomImageSrc;
			postElUser.prepend(postImage);
		}

		// Feeling
		let feelingPost = document.createElement('div');
		feelingPost.className = 'feelingPost';
		feelingPost = document.getElementById('selectedFeeling');
		feelingPost = feelingPost.options[feelingPost.selectedIndex].value;
		postElUser.prepend(feelingPost);

		//Actual post text
		let myUserPost = document.createElement('div');
		myUserPost.className = 'userPost';
		userPost = document.getElementById('myTextArea').value;
		myUserPost.innerText = userPost;
		console.log('userPost', myUserPost);
		postElUser.prepend(myUserPost);

		//Timestamp display
		const postTime = document.createElement('div');
		postTime.className = 'postTime';
		postTime.innerText = moment().startOf('minute').fromNow(); //post.timestamp;
		postElUser.prepend(postTime);

		//Prepends Post Username
		const mainUserName = document.createElement('div');
		const userName = localStorage.getItem('username');
		mainUserName.className = 'friend';
		mainUserName.innerText = userName;
		postElUser.prepend(mainUserName);

		//Appends everyting as a big Div to the newsfeed head.
		containerElUser.prepend(postElUser);

		//Resetting values after posting:
		document.getElementById('selectedFeeling').selectedIndex = 0;
		document.getElementById('myTextArea').value = '';
		attachPhoto = false;
	}
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function feelingFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

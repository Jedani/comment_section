fetch("data.json")
	.then((resp) => resp.json())
	.then((data) => main(data));

function main(data) {
	const comments = data.comments;
	console.log(comments);
	console.log(data);

	function checker(currentUser, user, id) {}

	comments.forEach((element) => {
		checker(data.currentUser.username, element.user.username, element.id);
	});

	fetch("data.json")
		.then((resp) => resp.json())
		.then((data) => {
			let cont = document.querySelector(".first");
			if (cont.className == "first") {
				(document.querySelector("#user").src = data.comments[0].user.image.png),
					(document.querySelector("#name").innerText =
						data.comments[0].user.username),
					(document.querySelector("#dits").innerText =
						data.comments[0].createdAt),
					(document.querySelector(".coments").innerText =
						data.comments[0].content),
					(document.querySelector(".count").innerText = data.comments[0].score);
			}
			let sec = document.querySelector(".second");
			if (sec.className == "second") {
				(document.querySelector("#user").src = data.comments[1].user.image.png),
					(document.querySelector("#name").innerText =
						data.comments[1].user.username),
					(document.querySelector("#dits").innerText =
						data.comments[1].createdAt),
					(document.querySelector(".coments").innerText =
						data.comments[1].content),
					(document.querySelector(".count").innerText = data.comments[1].score);
			}
		});
}

// function two() {
// 	fetch("data.json")
// 		.then((resp) => resp.json())
// 		.then((data) => {

// }
// two();

const content = document.querySelector(".open");
const reply = document.querySelector("#reply");
reply.onclick = function () {
	if (content.className == "open") {
		// shrink
		content.className = "onReply";
	} else {
		content.className = "open";
	}
};

const up = document.querySelector("#max");
const down = document.querySelector("#min");
let val = document.querySelector(".count").innerText;
up.onclick = function () {
	console.log(val);
};
down.onclick = function () {
	alert("me");
};

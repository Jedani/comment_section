function addImage() {
	fetch("data.json")
		.then((resp) => resp.json())
		.then(
			(data) =>
				(document.querySelector("#ig").src = data.currentUser.image.png),
		);
}
addImage();

function one() {
	fetch("data.json")
		.then((resp) => resp.json())
		.then((data) =>
			console.log(data)(
				(document.querySelector("#user").src = data.comments[0].user.image.png),
				(document.querySelector("#name").innerText =
					data.comments[0].user.username),
				(document.querySelector("#dits").innerText =
					data.comments[0].createdAt),
				(document.querySelector(".coments").innerText =
					data.comments[0].content),
				(document.querySelector(".count").innerText = data.comments[0].score),
			),
		);
}
one();

fetch("data.json")
	.then((resp) => resp.json())
	.then((data) => main(data));

function main(data) {
	const comments = data.comments;
	const commentNode = document.getElementById("topDawg");
	console.log(comments);
	console.log(data);
	console.log(commentNode);

	function checker(currentUser, user, id) {}

	comments.forEach((element) => {
		checker(data.currentUser.username, element.user.username, element.id);

		commentNode.insertAdjacentHTML(
			"beforeend",
			`	<div class="first" id=${element.id}>
					<div class="houser">
						<div class="counter">
							<img src="./images/icon-plus.svg" alt="" />
							<div class="count">${element.score}</div>
							<img  src="./images/icon-minus.svg" alt="" />
						</div>
					</div>
					<div class="topStuff" >
					<img src=${element.user.image.png} alt="amy" />
						<p >${element.user.username}</p>
						<div id="dit"><p>${element.createdAt}</p></div>
						<img id="svg" src="./images/icon-reply.svg" alt="reply" />
						<a href="#" id="reply">Reply</a>
					</div>
			
			<div class="coments">${element.content}</div>
			<div class="spacer"></div>`,
		);
	});
}

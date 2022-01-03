fetch("data.json")
	.then((resp) => resp.json())
	.then((data) => main(data));

function showReply(replyTo, currentUser, id) {
	const commmentContainer = document.getElementById(id);
	const hiddenBox = document.getElementById("hidden");
	console.log(hiddenBox);

	if (hiddenBox) {
		hiddenBox.parentNode.removeChild(hiddenBox);
	}
	commmentContainer.insertAdjacentHTML(
		"afterend",
		`<div class="onReply" id='hidden'>
				<img id="res" src="" alt="julius" />
				<form>
					<textarea name="comments" id="comms"></textarea>
					<input id="hitReply" type="submit" value="REPLY" />
				</form>
			</div>`,
	);
}

function main(data) {
	const comments = data.comments;
	const commentNode = document.getElementById("topDawg");
	let replyNode = document.getElementById("Ent");
	console.log(comments);
	console.log(data);

	let optional = ``;
	let you = "";

	function checker(currentUser, user, id) {
		if (currentUser == user) {
			optional = `
				<div class="delete">
					<img  src="./images/icon-delete.svg" alt="" />
					<p id="red"><strong>Delete</strong></p>
				</div>
				<div class="edit">
					<img  src="./images/icon-edit.svg" alt="" />
					<p id="blue"><strong>Edit</strong></p>
				</div>
				`;
			you = '<div class="you">you</div>';
		} else {
			optional = `<span class="reply-btn" onclick="showReplyBox('${writer}','${data.currentUser.image.png}','com${comId}')">
							<img id="svg" src="./images/icon-reply.svg" alt="reply" /> <strong>Reply</strong>`;
			you = "";
		}
	}

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
						<p ><strong>${element.user.username}</strong></p>
						<div id="dit"><p>${element.createdAt}</p></div>
						<div>${optional}</div>
						<a href="#" id="reply">Reply</a>
					</div>
			
			<div class="coments">${element.content}</div>
			<div class="spacer"></div>`,
		);

		if (element.replies.length > 0) {
			element.replies.forEach((reply) => {
				checker(data.currentUser.username, reply.user.username, reply.id);

				replyNode.insertAdjacentHTML(
					"beforeend",
					`	<div class="second" id=${reply.id}>
							<div class="houser">
								<div class="counter">
									<img src="./images/icon-plus.svg" alt="" />
									<div class="count">${reply.score}</div>
									<img  src="./images/icon-minus.svg" alt="" />
								</div>
						</div>
						<div class="topStuff" >
								<img src=${reply.user.image.png} alt="amy" />
									<p ><strong>${reply.user.username}</strong> ${you}</p>
									<div id="dit"><p>${reply.createdAt}</p></div>
									<div class="options">${optional}</div>
						</div>
					
						<div class="coments">${reply.content}</div>
						<div class="spacer"></div>`,
				);
			});
		}
	});
}

const sendbtn = document.getElementById("hit");
sendbtn.addEventListener("click", function (event) {
	event.preventDefault();
});

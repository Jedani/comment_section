fetch("data.json")
	.then((resp) => resp.json())
	.then((data) => main(data));

function showReply(replyTo, currentUser, id) {
	const commmentContainer = document.getElementById(id);
	const hiddenBox = document.getElementById("hidden");

	if (hiddenBox) {
		hiddenBox.parentNode.removeChild(hiddenBox);
	} else {
		commmentContainer.insertAdjacentHTML(
			"afterend",
			`<div class="onReply" id='hidden'>
				<img id="res" src=${currentUser} alt="julius" />
				<form>
					<textarea name="comments" id="comms">@${replyTo}</textarea>
					<input id="hitReply" type="submit" value="REPLY" />
				</form>
			</div>`,
		);
	}
}

const deleteBox = document.getElementById("mod");
function deleter(id) {
	deleteBox.classList.add("active");
	deleteBox.innerHTML = `
	<div class="modalHouse">
		<div class="deleter">
			<h3>Delete comment</h3>
			<p> Are you sure you want to delete this comment?
			This will remove the comment and can't be undone.
			</p>
			<div class="delete-options">
				<button id="no" onclick="No()">NO, CANCEL</button>
				<button id="yes" onclick="Yes('${id}')">YES, DELETE</button>
			</div>
		</div>
  </div>
  `;
}
function No() {
	deleteBox.classList.remove("active");
}

function Yes(id) {
	const comment = document.getElementById(id);
	comment.parentNode.removeChild(comment);
	deleteBox.classList.remove("active");
}

function editor(id) {
	const edited = document.getElementById(id);
	const look = edited.querySelector(".coments");
	look.setAttribute("contenteditable", "true");

	look.insertAdjacentHTML(
		"afterend",
		`
		 <button id="update" type="submit" onclick="updater('${id}')">UPDATE</button>
		`,
	);
}

function updater(id) {
	const updateBtn = document.getElementById("update");
	const text = document.getElementById(id);
	const newText = text.querySelector(".coments");
	let newContent = newText.innerText;
	newText.innerText = "";

	newText.insertAdjacentHTML(
		"afterbegin",
		`
		${newContent}
		`,
	);

	newText.setAttribute("contenteditable", "false");
	updateBtn.style.display = "none";
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
			<div class="options">
				<div class="delete">
					<img  src="./images/icon-delete.svg" alt="" />
					<p id="red" onclick="deleter('${id}')"><strong>Delete</strong></p>
				</div>
				<div class="edit">
					<img  src="./images/icon-edit.svg" alt="" />
					<p id="blue" onclick="editor('${id}')"><strong>Edit</strong></p>
				</div>
			</div>
				`;
			you = '<div class="you">you</div>';
		} else {
			optional = `
			<div class="option"  >
				<img id="svg" src="./images/icon-reply.svg" alt="reply"/> 
				<p onclick="showReply('${user}','${data.currentUser.image.png}','${id}')"><strong>Reply</strong></p>
			</div>`;

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
							<img id="p${element.id}" src="./images/icon-plus.svg" alt="" onclick="counter('${element.id}')"/>
							<div class="count" id=${element.id}>${element.score}</div>
							<img id="m${element.id}" src="./images/icon-minus.svg" alt="" onclick="counter('${element.id}')"/>
						</div>
					</div>

					<div class="align">
						<div class="topStuff" >
							<img src=${element.user.image.png} alt="amy" />
							<p ><strong>${element.user.username}</strong></p>
							<div id="dit"><p>${element.createdAt}</p></div>
							${optional}
						</div>
						<div class="coments">${element.content}</div>
					</div>
				</div>
			`,
		);

		if (element.replies.length > 0) {
			element.replies.forEach((reply) => {
				checker(data.currentUser.username, reply.user.username, reply.id);

				replyNode.insertAdjacentHTML(
					"beforeend",
					`	<div class="second" id=${reply.id}>
							<div class="houser">
								<div class="counter">
									<img id="p${reply.id}" src="./images/icon-plus.svg" alt="" onclick="counter('${reply.id}')"/>
									<div class="count" id=${reply.id}>${reply.score}</div>
									<img id="m${reply.id}" src="./images/icon-minus.svg" alt="" onclick="counter('${reply.id}')" />
								</div>
							</div>

							<div class="align">
								<div class="topStuff" >
									<img src=${reply.user.image.png} alt="amy" />
									<p ><strong>${reply.user.username}</strong> ${you}</p>
									<div id="dit"><p>${reply.createdAt}</p></div>
									${optional}
								</div>
								<div class="coments" id=${reply.id}>
									<div id="replyTo">
									<span id="re"><strong>@${reply.replyingTo}</strong></span>
									</div>
									 ${reply.content}
								</div>
							</div>
						</div>
						`,
				);
			});
		}
	});
}

function counter(id) {
	const count = document.getElementById(`${id}`);
	const num = count.querySelector(".count");
	// let stringy = num.innerText;
	// let inty = parseInt(stringy);
	console.log(num);
}

const sender = document.querySelector("#hit");
sender.addEventListener("click", function (e) {
	e.preventDefault();
});

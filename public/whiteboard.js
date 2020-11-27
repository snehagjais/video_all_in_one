function openWhiteboard(roomId) {
	createWhiteBoard(roomId);
	showHideWhiteBoard('open');
}

function createWhiteBoard(roomId) {
	document.getElementById("boardModal").style.display="block";

	var wt = new api.WhiteboardTeam('#wt-container', {
		clientId: 'e156f6a04a0b741373189d7c48eee17f',
		boardCode: roomId
	});
}

function closeWhiteboard() {
  hideWhiteBoard();
  showHideWhiteBoard('close');
}

function hideWhiteBoard() {
	document.getElementById("boardModal").style.display = "none ";

  	var frame = document.getElementById("whiteboard_team");
  	frame.parentNode.removeChild(frame);

}

// Drag and Drop functionality
function allowDrop(event) {
	event.preventDefault();
  }
  
  function drag(event) {
	event.dataTransfer.setData("text/plain", event.target.id);
  }
  
  function drop(event) {
	event.preventDefault();
	const itemId = event.dataTransfer.getData("text/plain");
	const item = document.getElementById(itemId);
	event.target.appendChild(item);
  }
  
  // Reset button functionality
  function reset() {
	const container1 = document.getElementById("container1");
	const container2 = document.getElementById("container2");
	const items = document.querySelectorAll(".box");
  
	items.forEach(item => {
	  container1.appendChild(item);
	});
  }
  
<html><head></head><body>function changeFrame(file_path){
	var iframe = document.getElementById("page_frame");
	iframe.src = file_path;
}

function toggleSubTree(element){
	var nextSibling = element.parentElement.nextElementSibling;
	if(nextSibling.tagName == 'UL'){
		nextSibling.classList.toggle('hide');
		if(element.textContent == '+'){
			element.textContent = '-'
		}else{
			element.textContent = '+'
		}
	}
}

function expandAllSubtrees(element){
	var subtrees = document.getElementsByClassName("subtree");
	for(var i=0; i</body></html>
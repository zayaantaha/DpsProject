
function renderDetailsPage(fileName) {
    const render = (json) => {
	document.title = json.name;
	document.querySelector('.articleName').innerHTML = json.name;
	document.querySelector('.small-description').innerHTML = json['small-description'];
	document.querySelector('.description').innerHTML = json.description;
	const mainImage = document.querySelector('.mainImage');
	mainImage.src = json.image;
	mainImage.alt = json['small-description'];
	
    };
    
    fetch(fileName)
	.then(response => response.json())
	.then(json => render(json));
};

function renderHomePage(element, template, fileName) {

    const render = (array) => {
	for (const json of array) {
	    const child = template.content.cloneNode(true);
	    child.querySelector('.sectionName').innerHTML = json.name;
	    child.querySelector('.small-description').innerHTML = json['description'];
	    const img = child.querySelector('.image');
	    img.src = json.image;
	    img.alt = json['description'];
	    element.appendChild(child);
	}
    };
    
    fetch(fileName)
	.then(response => response.json())
	.then(json => render(json));
}


function wrapLayout(element){
    const render = (text) => {
	document.body.innerHTML = text;
	document.getElementById('content').appendChild(element);
    };
    
    fetch('./layout.html')
	.then(response => response.text())
	.then(text => render(text));
}



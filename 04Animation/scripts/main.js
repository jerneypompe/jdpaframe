

// changing individual properties with code and using setInterval
var rotationSpeed1 = 0.01;
var rotationSpeed2 = 0.05;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed1;
	myOtherBox.object3D.rotation.y += rotationSpeed2;
	myOtherBox.object3D.rotation.z += rotationSpeed1;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps


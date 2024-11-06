const h1 = document.createElement('h1');
h1.textContent = 'Photo';
h1.style.color = 'red';
h1.style.backgroundColor = 'black';
h1.style.fontWeight = 'bold';
h1.style.padding = '5px 20px';
h1.style.display = 'inline-block';
h1.style.margin = '0';


const button = document.createElement('button');
button.textContent = 'Photo show/Hide';
button.style.marginTop = '20px';
button.style.padding = '10px 20px';
button.style.backgroundColor = 'black';
button.style.color = 'white';
button.style.border = 'none';
button.style.cursor = 'pointer';
button.style.borderRadius = '5px';
button.style.fontSize = '16px';
button.style.transition = 'background-color 0.3s ease, transform 0.3s ease'; 


button.addEventListener('mouseover', function() {
    button.style.backgroundColor = 'red';
    button.style.transform = 'scale(1.1)'; 
});
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'black'; 
    button.style.transform = 'scale(1)';   
});

button.addEventListener('mousedown', function() {
    button.style.backgroundColor = 'darkred'; 
});
button.addEventListener('mouseup', function() {
    button.style.backgroundColor = 'red';  
});

const imageContainer = document.createElement('div');
imageContainer.id = 'image-container';
imageContainer.style.display = 'none'; 
imageContainer.style.textAlign = 'center';
imageContainer.style.marginTop = '20px';

const img = document.createElement('img');
img.src = 'a.png'; 
img.alt = 'Rasm';
img.style.maxWidth = '100%';
img.style.height = 'auto';
img.style.marginBottom = '20px';

imageContainer.appendChild(img);

const container = document.createElement('div');
container.style.textAlign = 'center'; 
container.style.marginTop = '20px';

container.appendChild(button);
container.appendChild(imageContainer);

document.body.appendChild(h1);
document.body.appendChild(container);


button.addEventListener('click', function() {
    if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none'; 
    }
});

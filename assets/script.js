document.getElementById('qr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    generateQRCode();
});

function generateQRCode() {
    const url = document.getElementById('url-input').value;
    if (url) {
        const qrCodeContainer = document.getElementById('qr-code');
        qrCodeContainer.innerHTML = '';  // Clear any existing QR code
        
        // Create a new canvas element
        const canvas = document.createElement('canvas');
        qrCodeContainer.appendChild(canvas);

        QRCode.toCanvas(canvas, url, { width: 200, height: 200 }, function (error) {
            if (error) {
                console.error(error);
            } else {
                console.log('QR code generated successfully');
            }
        });
    } else {
        alert('Please enter a URL.');
    }
}
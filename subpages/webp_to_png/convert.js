
document.getElementById('convertFileButton').addEventListener('click', function() {
    const fileUploaded = document.getElementById('webpFileInput');
    const canvas = document.getElementById('canvas');
    const downloadLink = document.getElementById('downloadLink');
    const ctx = canvas.getContext('2d');


    if (!fileUploaded.isDefaultNamespace.length) {
        alert('please select a file');
        return;
    }

    const file = fileUploaded.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function(e) {
        const img = new Image();

        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                downloadLink.href = url;
                downloadLink.download = fileUploaded.files[0].name.split('.')[0] + '.png';
                downloadLink.style.display = 'block';
                downloadLink.innerText = 'Download file';
            });
        
        }
        img.onerror = function () {
            alert('Please check the format of the file');
            return;
        }
        img.src = e.target.result;
    }
    fileReader.readAsDataURL(file);
})
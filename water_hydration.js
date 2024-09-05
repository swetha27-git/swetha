document.getElementById('insertImageButton').addEventListener('click', function () {
    document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', function (event) {
    var imageContainer = document.getElementById('imageContainer');
    var showButton = document.getElementById('showButton');
    var captureButton = document.getElementById('captureButton');
    var observationDetails = document.getElementById('observationDetails');
    var video = document.getElementById('video');

    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
            img.style.display = 'block';
            video.style.display = 'none';
            showButton.style.display = 'inline-block';
            captureButton.style.display = 'none';
            observationDetails.style.display = 'none'; // Hide previous details
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('cameraIcon').addEventListener('click', function () {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var captureButton = document.getElementById('captureButton');

    // Get access to the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            video.style.display = 'block';
            captureButton.style.display = 'inline-block';
        })
        .catch(function (err) {
            alert('Error accessing webcam: ' + err);
        });
});

document.getElementById('captureButton').addEventListener('click', function () {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var imageContainer = document.getElementById('imageContainer');
    var showButton = document.getElementById('showButton');
    var observationDetails = document.getElementById('observationDetails');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    var img = document.createElement('img');
    img.src = canvas.toDataURL('image/png');
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
    img.style.display = 'block';
    video.style.display = 'none';
    showButton.style.display = 'inline-block';
    observationDetails.style.display = 'none'; // Hide previous details

    // Stop the webcam
    video.srcObject.getTracks().forEach(track => track.stop());
});

document.getElementById('showButton').addEventListener('click', function () {
    // Placeholder for actual image analysis logic
    var waterContent = "75%"; // Example result from image analysis

    // Display the results
    var observationDetails = document.getElementById('observationDetails');
    var waterContentDetails = document.getElementById('waterContentDetails');
    waterContentDetails.textContent = "The water content in the plant is approximately " + waterContent + ".";
    observationDetails.style.display = 'block';
});

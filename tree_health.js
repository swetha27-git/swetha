const insertImageBtn = document.getElementById('insert-image-btn');
const imageInput = document.getElementById('image-input');
const imageContainer = document.getElementById('image-container');
const showBtn = document.getElementById('show-btn');
const plantNameInput = document.getElementById('plant-name');
const plantInfoDiv = document.getElementById('plant-info');
const captureBtn = document.getElementById('capture-btn');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');

// Image Upload Functionality
insertImageBtn.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.objectFit = 'contain'; // Ensures it fits inside the div
        img.style.display = 'block'; // Centers image vertically
        imageContainer.innerHTML = ''; // Clear the container
        imageContainer.appendChild(img);
        showBtn.disabled = false; // Enable the show button
    };
    reader.readAsDataURL(file);
});

// Capture Image Functionality
captureBtn.addEventListener('click', () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            video.style.display = 'block';
            video.srcObject = stream;
        });
    }
});

video.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const img = document.createElement('img');
    img.src = canvas.toDataURL();
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.objectFit = 'contain';
    img.style.display = 'block';
    imageContainer.innerHTML = ''; // Clear the container
    imageContainer.appendChild(img);
    showBtn.disabled = false; // Enable the show button
});

// Show Plant Details Based on Input
showBtn.addEventListener('click', () => {
    const plantName = plantNameInput.value.toLowerCase().trim();
    let plantDetails = '';

    switch(plantName) {
        case 'crown gall':
                plantDetails = 'Crown Gall is a bacterial disease that attacks the roots of plants. Fertilizer/Pesticide: Use soil fumigants and sterilization techniques.';
                break;
            case 'fire blight':
                plantDetails = 'Fire Blight is a serious bacterial disease affecting apples and pears. Fertilizer/Pesticide: Use copper-based fungicides and avoid excessive nitrogen.';
                break;
            case 'anthracnose canker':
                plantDetails = 'Anthracnose Canker affects trees and shrubs. Fertilizer/Pesticide: Apply fungicides and prune affected areas.';
                break;
            case 'apple scab':
                plantDetails = 'Apple Scab causes dark spots on apple leaves and fruits. Fertilizer/Pesticide: Use fungicides and plant disease-resistant apple varieties.';
                break;
            case 'armillaria root rot':
                plantDetails = 'Armillaria Root Rot affects tree roots. Fertilizer/Pesticide: Remove affected trees and sterilize the soil.';
                break;
            case 'frogeye leaf spot and black rot':
                plantDetails = 'Frogeye Leaf Spot and Black Rot are fungal diseases. Fertilizer/Pesticide: Use fungicides and remove infected branches.';
                break;
            case 'phytophthora crown rot':
                plantDetails = 'Phytophthora Crown Rot affects the crown and roots of plants. Fertilizer/Pesticide: Use copper fungicides and improve soil drainage.';
                break;
            case 'powdery mildew':
                plantDetails = 'Powdery Mildew is a fungal disease causing a white coating on leaves. Fertilizer/Pesticide: Apply sulfur-based fungicides or neem oil.';
                break;
            case 'rust':
                plantDetails = 'Rust is a fungal disease that causes rust-colored spots on leaves. Fertilizer/Pesticide: Use rust-resistant plant varieties and fungicides.';
                break;
            case 'sooty blotch and flyspeck':
                plantDetails = 'Sooty Blotch and Flyspeck affect apple surfaces. Fertilizer/Pesticide: Use fungicides and maintain good airflow between trees.';
                break;
            case 'southern blight':
                plantDetails = 'Southern Blight affects plant roots and stems. Fertilizer/Pesticide: Use soil fungicides and crop rotation.';
                break;
            case 'white rot':
                plantDetails = 'White Rot, also known as Bot Rot, is a fungal disease. Fertilizer/Pesticide: Use fungicides and prune affected branches.';
                break;
            case 'bitter pit':
                plantDetails = 'Bitter Pit is a physiological disorder caused by calcium deficiency. Fertilizer: Use calcium foliar sprays.';
                break;
            case 'chlorosis':
                plantDetails = 'Chlorosis causes yellowing of leaves due to nutrient deficiency. Fertilizer: Apply iron-based fertilizers.';
                break;
            case 'cork spot':
                plantDetails = 'Cork Spot causes sunken spots on apple fruits. Fertilizer: Use calcium and nitrogen fertilizers to prevent the disorder.';
                break;
            case 'soggy breakdown':
                plantDetails = 'Soggy Breakdown is a physiological disorder in apples. Fertilizer: Maintain proper storage conditions to prevent it.';
                break;
            case 'sunscald':
                plantDetails = 'Sunscald occurs due to excessive sunlight. Fertilizer: Provide proper tree shading and water management.';
                break;
        case 'braeburn':
        case 'fuji':
        case 'gala':
        case 'golden delicious':
        case 'granny smith':
        case 'honeycrisp':
        case 'mcintosh':
        case 'red delicious':
            plantDetails = `This is the ${plantName.charAt(0).toUpperCase() + plantName.slice(1)} variety of apple. Fertilizer: Use a balanced fertilizer high in potassium and phosphorus for apple trees.`;
            break;
        default:
            plantDetails = 'Plant or disease not found. Please check the name or try another.';
    }

    plantInfoDiv.innerHTML = `<h3>Details for: ${plantName}</h3><p>${plantDetails}</p>`;
});

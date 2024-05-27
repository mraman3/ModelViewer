const modelViewerVariants = document.querySelector("model-viewer#shoe");

document.getElementById("contactChoice1").addEventListener("click", function () {
    modelViewerVariants.src = "models/DRIP1.glb";
}, false);

document.getElementById("contactChoice2").addEventListener("click", function () {
    modelViewerVariants.src = "models/DRIP2.glb";
}, false);

document.getElementById("contactChoice3").addEventListener("click", function () {
    modelViewerVariants.src = "models/DRIP3.glb";
}, false);


const container = document.getElementById("body-grid-container");
const captureButton = document.getElementById("capture-button");

captureButton.addEventListener("click", async () => {
    const canvas = await html2canvas(container);
    
    // Convert canvas to a data URL
    const image = canvas.toDataURL("image/png");

    // Create a temporary link element
    const downloadLink = document.createElement("a");
    downloadLink.href = image;
    downloadLink.download = "screenshot.png";

    // Trigger the download
    downloadLink.click();
});

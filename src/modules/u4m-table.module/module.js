function downloadBtn() {
  const downloadLinks = document.querySelectorAll(".download-pdf");
  downloadLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const url = this.href;
      const fileName = url.split("/").pop();
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.blob();
        })
        .then((blob) => {
          const tempLink = document.createElement("a");
          tempLink.href = window.URL.createObjectURL(blob);
          tempLink.download = fileName;
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
        })
        .catch((error) => console.error("Error downloading the file:", error));
    });
  });
}

// Initialize the function after the DOM is loaded
document.addEventListener("DOMContentLoaded", downloadBtn);

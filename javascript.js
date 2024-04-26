async function generateQR() {
    var inputValue = document.getElementById("qr-input").value;
    if (inputValue === "") {
      alert("Por favor, ingrese un texto o URL.");
      return;
    }
  
    try {
      // Crear el enlace de descarga y descargar automáticamente
      var qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputValue)}`;
      var response = await fetch(qrImageUrl);
      var blob = await response.blob();
      var downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = "codigo_qr.png";
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error al generar y descargar el código QR:", error);
      alert("Ha ocurrido un error al generar y descargar el código QR. Por favor, inténtalo de nuevo.");
    }
  }
  
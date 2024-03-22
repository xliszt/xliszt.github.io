// script.js
document.addEventListener("DOMContentLoaded", function() {
    var pdfSelect = document.getElementById("pdfSelect");
    var pdfViewer = document.getElementById("pdfViewer");

    // Populate dropdown menu with PDF files
    fetchPDFList().then(function(files) {
        files.forEach(function(file) {
            var option = document.createElement("option");
            option.text = file.name;
            option.value = file.url;
            pdfSelect.appendChild(option);
        });
    });

    // Function to fetch list of PDF files
    async function fetchPDFList() {
        var response = await fetch("pdf_files.json");
        var data = await response.json();
        return data.files;
    }

    // Function to view selected PDF
    window.viewPDF = function() {
        var selectedPDF = pdfSelect.value;
        if (selectedPDF) {
            pdfViewer.src = selectedPDF;
        } else {
            alert("Please select a PDF file.");
        }
    };

    // Function to download selected PDF
    window.downloadPDF = function() {
        var selectedPDF = pdfSelect.value;
        if (selectedPDF) {
            var link = document.createElement("a");
            link.href = selectedPDF;
            link.download = pdfSelect.options[pdfSelect.selectedIndex].text;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert("Please select a PDF file.");
        }
    };
});

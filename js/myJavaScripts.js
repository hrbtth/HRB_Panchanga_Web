function downloadDivAsPdf(divId, fileName) {
    var element = document.getElementById(divId);

    var opt = {
        margin: 0.5,
        filename: fileName + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a3', orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save();
}
// Print content by element ID
function printDiv(divId) {
    const content = document.getElementById(divId).innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// Download a base64 file
function downloadFile(fileName, mimeType, base64Data) {
    const link = document.createElement('a');
    link.download = fileName;
    link.href = `data:${mimeType};base64,${base64Data}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// myJavaScripts.js

window.exportDynamicSizePdf = function (divId) {
    const element = document.getElementById(divId);

    // Clone to measure actual width
    const clone = element.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.width = 'auto';
    document.body.appendChild(clone);

    const widthInPixels = clone.offsetWidth;
    document.body.removeChild(clone);

    // Convert to mm (1px ≈ 0.264583 mm)
    const widthInMm = widthInPixels * 0.264583;
    const heightInMm = 297; // A4 height

    const opt = {
        margin: 5,
        filename: 'Panchanga.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: [widthInMm, heightInMm], orientation: 'landscape' }
    };

    html2pdf().set(opt).from(element).save();
};
// the following function is used to checks if the user is on a mobile device.
//here we define a function "checkIfMobile" and attach it to the window object
// so it can be accessed globally.You can invoke "checkIfMobile()" from anywhere in project.
window.checkIfMobile = function () {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
};
// To save data to localStorage
window.panchangaStorage = {
    saveData: function (data) {
        localStorage.setItem("PanchangaRowsStr", data);
    },
    getData: function () {
        return localStorage.getItem("PanchangaRowsStr");
    },
    clearData: function () {
        localStorage.removeItem("PanchangaRowsStr");
    }
};
// ✅ This works
window.setWaitCursor = function () {
    document.body.style.cursor = 'wait';
};

window.resetCursor = function () {
    document.body.style.cursor = 'default';
};






function generatePDF() {
    const element = document.getElementById('cv-contents');

    const opt = {
        margin:       1.5,
        filename:     'Minh_Quan_Nguyen_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}
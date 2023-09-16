window.addEventListener("DOMContentLoaded", (event) => {

    const filebox = document.getElementById('filebox');
    const filenamebox = document.getElementById('filenamebox');
    const btnbrowse = document.getElementById('btnbrowse');

    btnbrowse.addEventListener('click', (event) => {
        filebox.click();
    });

    filebox.addEventListener('change', () => {
        filenamebox.value = filebox.value.split("\\").pop();
    })
});
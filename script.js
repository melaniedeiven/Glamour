document.addEventListener("DOMContentLoaded", function () {
    const dateCells = document.querySelectorAll(".calendar .clickable");

    dateCells.forEach(cell => {
        cell.addEventListener("click", function () {
            const selectedDate = this.getAttribute("data-date");
            alert(`You selected ${selectedDate}`);
        });
    });

});

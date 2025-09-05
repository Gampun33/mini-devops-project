// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member");
    const infoBox = document.getElementById("member-info");
    const infoTitle = infoBox.querySelector("h2");
    const infoText = infoBox.querySelector("p");

    members.forEach(member => {
        member.addEventListener("click", () => {
            const name = member.querySelector("h2").innerText;
            const detail = member.getAttribute("data-info");

            infoTitle.textContent = name;
            infoText.textContent = detail;

            infoBox.style.display = "block"; // แสดงกล่อง
        });
    });
});

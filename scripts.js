document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member");
    const infoBox = document.getElementById("member-info");

    const infoImg   = document.getElementById("info-img");
    const infoName  = document.getElementById("info-name");
    const infoId    = document.getElementById("info-id");
    const infoDept  = document.getElementById("info-dept");
    const infoAge   = document.getElementById("info-age");
    const infoSkill = document.getElementById("info-skill");
    const infoPhone = document.getElementById("info-phone");
    const infoEmail = document.getElementById("info-email");

    let activeMember = null;

    members.forEach(member => {
        member.addEventListener("click", () => {
            const name = member.querySelector("h2").innerText;
            const imgSrc = member.querySelector("img").getAttribute("src");

            if (activeMember === member) {
                // คลิกซ้ำ -> ซ่อนกล่อง
                infoBox.classList.remove("show");
                activeMember = null;
            } else {
                // อัปเดตข้อมูล
                infoImg.src = imgSrc;
                infoName.textContent = name;
                infoId.textContent = member.dataset.id;
                infoDept.textContent = member.dataset.dept;
                infoAge.textContent = member.dataset.age + " ปี";
                infoSkill.textContent = member.dataset.skill;
                infoPhone.textContent = member.dataset.phone;
                infoEmail.textContent = member.dataset.email;

                infoBox.classList.add("show");
                activeMember = member;

                // เลื่อนลงไปกล่อง info
                infoBox.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

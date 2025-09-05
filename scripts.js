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

    let activeMember = null; // เก็บ member ที่ถูกเลือก

    members.forEach(member => {
        member.addEventListener("click", () => {
            const name = member.querySelector("h2").innerText;

            if (activeMember === member) {
                // ถ้าคลิกซ้ำ -> ปิดกล่อง
                infoBox.style.display = "none";
                activeMember = null;
            } else {
                // อัปเดตข้อมูลใหม่
                const imgSrc = member.querySelector("img").getAttribute("src");

                infoImg.src = imgSrc;
                infoName.textContent = name;
                infoId.textContent = member.dataset.id;
                infoDept.textContent = member.dataset.dept;
                infoAge.textContent = member.dataset.age + " ปี";
                infoSkill.textContent = member.dataset.skill;
                infoPhone.textContent = member.dataset.phone;
                infoEmail.textContent = member.dataset.email;

                infoBox.style.display = "block";
                activeMember = member;
            }
        });
    });
});

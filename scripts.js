document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll(".member");
    const infoBox = document.getElementById("member-info");

    const infoImg    = document.getElementById("info-img");
    const infoName   = document.getElementById("info-name");
    const infoId     = document.getElementById("info-id");
    const infoDept   = document.getElementById("info-dept");
    const infoAge    = document.getElementById("info-age");
    const infoSkill  = document.getElementById("info-skill");
    const infoPhone  = document.getElementById("info-phone");
    const infoEmail  = document.getElementById("info-email");
    const infoGithub = document.getElementById("info-github");

    let activeMember = null;

    members.forEach(member => {
        member.addEventListener("click", () => {
            // Remove highlight from other members
            members.forEach(m => m.classList.remove('active'));

            if (activeMember === member) {
                // ซ่อน info box
                infoBox.style.display = "none";
                activeMember = null;
            } else {
                // Highlight clicked member
                member.classList.add('active');

                // Update info box
                infoImg.src = member.querySelector("img").src;
                infoName.textContent = member.querySelector("h2").innerText;
                infoId.textContent = member.dataset.id;
                infoDept.textContent = member.dataset.dept;
                infoAge.textContent = member.dataset.age + " ปี";
                infoSkill.textContent = member.dataset.skill;
                infoPhone.textContent = member.dataset.phone;
                infoEmail.textContent = member.dataset.email;
                infoGithub.href = member.dataset.github;

                // Show info box
                infoBox.style.display = "block";
                activeMember = member;

                // Scroll smoothly to info box
                infoBox.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

// =========================
// UNIVERSITY SEARCH
// =========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const searchTerm = this.value.toLowerCase();

        const cards = document.querySelectorAll(".uni-card");

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchTerm)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// =========================
// SAVED UNIVERSITIES
// =========================

let savedCount = 0;

const countElement = document.getElementById("savedCount");

const saveButtons = document.querySelectorAll(".save-btn");

saveButtons.forEach(button => {

    button.addEventListener("click", function(){

        if(this.classList.contains("saved")){

            this.classList.remove("saved");

            this.innerHTML = "♡ Save University";

            savedCount--;

        } else {

            this.classList.add("saved");

            this.innerHTML = "♥ Saved";

            savedCount++;

        }

        if(countElement){
            countElement.textContent = savedCount;
        }

    });

});


// =========================
// COST CALCULATOR
// =========================

function calculateCost() {

    const city = Number(document.getElementById("city").value);

    const months = Number(document.getElementById("months").value);

    const total = city * months;

    document.getElementById("result").innerHTML = `
        <h2>Estimated Living Cost</h2>
        <p>¥${total.toLocaleString()}</p>
    `;
}

// =====================
// UNIVERSITY POPUP
// =====================

const detailsButtons = document.querySelectorAll(".details-btn");

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupInfo = document.getElementById("popupInfo");
const closePopup = document.getElementById("closePopup");

detailsButtons.forEach(button => {

    button.addEventListener("click", function(){

        const card = this.closest(".uni-card");

let university = card.querySelector("h3")
    .textContent
    .trim();

university = university
    .replace("Top 1%", "")
    .replace("Top 2%", "")
    .replace("Top 5%", "")
    .trim();

console.log(university);
        popupTitle.textContent = university;

        const data = universityData[university];

        if (!data) {

            popupInfo.innerHTML = `
                <p>University information not added yet.</p>
            `;

            popup.style.display = "block";
            return;
        }

        popupInfo.innerHTML = `
            <p>📍 <strong>City:</strong> ${data.city}</p>

            <p>🎓 <strong>Strong Programs:</strong> ${data.major}</p>

            <p>💰 <strong>Scholarship:</strong> ${data.scholarship}</p>

            <p>🌍 <strong>English Taught:</strong> ${data.english}</p>

            <p>⭐ <strong>QS Rank:</strong> ${data.rank}</p>
        `;

        popup.style.display = "block";

    });

});

closePopup.addEventListener("click", function(){

    popup.style.display = "none";

});

window.addEventListener("click", function(event){

    if(event.target === popup){
        popup.style.display = "none";
    }

});
const universityData = {

"Tsinghua University": {
    city: "Beijing",
    major: "Computer Science, AI, Engineering",
    scholarship: "CSC Available",
    english: "Available",
    rank: "QS Top 20"
},

"Peking University": {
    city: "Beijing",
    major: "Liberal Arts, Economics, Business",
    scholarship: "CSC Available",
    english: "Available",
    rank: "QS Top 20"
},

"Fudan University": {
    city: "Shanghai",
    major: "Medicine, Business, Humanities",
    scholarship: "CSC Available",
    english: "Available",
    rank: "QS Top 50"
},

"Shanghai Jiao Tong University": {
    city: "Shanghai",
    major: "Engineering, AI, Technology",
    scholarship: "CSC Available",
    english: "Available",
    rank: "QS Top 50"
},

"Zhejiang University": {
    city: "Hangzhou",
    major: "Computer Science, Innovation, Business",
    scholarship: "CSC Available",
    english: "Available",
    rank: "QS Top 50"
},

"Harbin Institute of Technology": {
    city: "Harbin",
    major: "Robotics, Aerospace, Engineering",
    scholarship: "CSC Available",
    english: "Available",
    rank: "QS Top 200"
},

"CQUPT": {
    city: "Chongqing",
    major: "Computer Science, Telecommunications",
    scholarship: "CSC Available",
    english: "Available",
    rank: "Top Regional University"
},

"XUPT": {
    city: "Xi'an",
    major: "Electronics, Computer Science",
    scholarship: "CSC Available",
    english: "Available",
    rank: "Top Regional University"
},

"Hangzhou Dianzi University": {
    city: "Hangzhou",
    major: "AI, Software Engineering, Data Science",
    scholarship: "CSC Available",
    english: "Available",
    rank: "Top Technology University"
},

"NUIST": {
    city: "Nanjing",
    major: "Computer Science, Engineering",
    scholarship: "CSC Available",
    english: "Available",
    rank: "Top Regional University"
},

"Shanghai University of Finance & Economics": {
    city: "Shanghai",
    major: "Finance, Accounting, Economics",
    scholarship: "CSC Available",
    english: "Available",
    rank: "Top Finance University"
},

"XJTLU": {
    city: "Suzhou",
    major: "Business, Management, International Studies",
    scholarship: "Partial Scholarships",
    english: "Fully English-Taught",
    rank: "International Joint University"
},

"Peking University Health Science Center": {
    city: "Beijing",
    major: "Medicine, Public Health",
    scholarship: "CSC Available",
    english: "Available",
    rank: "China Top Medical School"
},

"Sun Yat-sen University": {
    city: "Guangzhou",
    major: "Medicine, Research, Sciences",
    scholarship: "CSC Available",
    english: "Available",
    rank: "QS Top 300"
},

"Sichuan University": {
    city: "Chengdu",
    major: "Dentistry, Medicine",
    scholarship: "CSC Available",
    english: "Available",
    rank: "Top Medical University"
},

"Jiangsu University": {
    city: "Zhenjiang",
    major: "Engineering, Business, Agriculture",
    scholarship: "CSC Available",
    english: "Available",
    rank: "Popular Scholarship Choice"
},

"Chongqing Jiaotong University": {
    city: "Chongqing",
    major: "Civil Engineering, Transportation",
    scholarship: "CSC Available",
    english: "Available",
    rank: "Affordable Public University"
},

"Beijing Union University": {
    city: "Beijing",
    major: "Business, Tourism, Applied Sciences",
    scholarship: "Available",
    english: "Available",
    rank: "International Student Friendly"
}

};
const courses = [
    {
        title: "Unreal Engine 5: Environment Design",
        author: "Pwnisher",
        category: "Unreal Engine",
        status: "Proses",
        image: "assets/ue5-env.jpg",
        link: "https://youtube.com"
    },
    {
        title: "Blender 3D Modeling Masterclass",
        author: "Grant Abbitt",
        category: "Blender",
        status: "Selesai",
        image: "assets/blender-basic.jpg",
        link: "#"
    },
    {
        title: "Substance Painter Texturing",
        author: "ArtStation Learning",
        category: "Substance Painter",
        status: "Belum",
        image: "assets/sp-texture.jpg",
        link: "#"
    },
    {
        title: "Blender to Unreal Pipeline",
        author: "William Faucher",
        category: "Pipeline",
        status: "Proses",
        image: "assets/pipeline.jpg",
        link: "#"
    }
];

const container = document.getElementById("courseContainer");
const searchInput = document.getElementById("searchInput");

function renderCourses(data) {
    container.innerHTML = "";
    data.forEach(course => {
        let statusClass = "st-belum";
        if (course.status === "Selesai") statusClass = "st-selesai";
        if (course.status === "Proses") statusClass = "st-proses";

        container.innerHTML += `
        <div class="card">
            <div class="card-img-wrapper">
                <span class="category-badge">${course.category}</span>
                <img src="${course.image}" class="card-img"
                     onerror="this.src='assets/default.jpg'">
            </div>
            <div class="card-content">
                <div class="card-title">${course.title}</div>
                <div class="card-author">${course.author}</div>
                <span class="status-badge ${statusClass}">${course.status}</span>
                <a class="card-link" href="${course.link}" target="_blank">Buka Materi</a>
            </div>
        </div>`;
    });
}

function filterCourses(category, btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (category === "all") renderCourses(courses);
    else renderCourses(courses.filter(c => c.category === category));
}

searchInput.addEventListener("input", e => {
    const key = e.target.value.toLowerCase();
    renderCourses(
        courses.filter(c =>
            c.title.toLowerCase().includes(key) ||
            c.author.toLowerCase().includes(key)
        )
    );
});

renderCourses(courses);

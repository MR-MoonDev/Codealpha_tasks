const projects = [
  {
    video: "./assets/videos/ecommer.mp4",
    title: "E-commerce Website",
    description: "A functional shopping site UI using REACT.JS",
    link: "https://github.com/MR-MoonDev/E-Shop-"
  },
  {
    video: "./assets/videos/Portfolio.mp4",
    title: "Portfolio Website",
    description: "A responsive portfolio built with REACT.JS and TAILWIND.CSS",
    link: "https://github.com/MR-MoonDev/MyPortfolio"
  },
  {
    video: "./assets/videos/Gemeni.mp4",
    title: "Promptpal",
    description: "Create Promtpal project build up on REACT.JS and VITE using TAILWIND.CSS",
    link: "https://github.com/MR-MoonDev/Gemini"
  },
  ,
  {
    video: "./assets/videos/calculator.mp4",
    title: "Calculator",
    description: "Create Calculator using HTML,CSS and JAVASCRIPT",
    link: "https://github.com/MR-MoonDev/Calculator"
  },
  ,
  {
    video: "./assets/videos/gallery.mp4",
    title: "Image gallery",
    description: "Intership Tast of Code Alpha",
    link: "#"
  }
];

const wrapper = document.getElementById("projectsWrapper");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <video src="${project.video}" controls muted loop autoplay></video>
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" class="view-btn">View Project</a>
    </div>
  `;
  wrapper.appendChild(card);
});

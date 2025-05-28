const techList = [
  { name: "C++", image: "assets/images/skills/cpp.png" },
  { name: "CSS", image: "assets/images/skills/css.png" },
  { name: "HTML", image: "assets/images/skills/Html.png" },
  { name: "XML", image: "assets/images/skills/xml.png" },
  { name: "JavaScript", image: "assets/images/skills/js.png" },
  { name: "React", image: "assets/images/skills/react.png" },
  { name: "Java", image: "assets/images/skills/java.png" },
  { name: "Mysql", image: "assets/images/skills/mysql.png" },
  { name: "Tailwind", image: "assets/images/skills/Tailwind.png" }
];

const container = document.getElementById("cardContainer");

techList.forEach((tech, index) => {
  const card = document.createElement("div");
  card.className = "glass";
  card.setAttribute("data-text", tech.name);
  card.style.setProperty("--r", `${(index - techList.length / 2) * 10}`);

  // Fix: use tech.image instead of tech.icon
  card.innerHTML = `<img src="${tech.image}" alt="${tech.name}" style="width: 60px; height: 60px;" />`;

  container.appendChild(card);
});

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

const gallery = document.querySelector(".gallery");

techList.forEach((tech) => {
  const img = document.createElement("img");
  img.src = tech.image;
  img.alt = tech.name;
  img.title = tech.name; // shows name on hover
  gallery.appendChild(img);
});

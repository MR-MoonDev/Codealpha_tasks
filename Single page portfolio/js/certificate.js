const certificates = [
    {
        image: "./assets/images/certificates/htmlTags.jpg",
        alt: "HTML Tags Certificate",
        link: "https://olympus.mygreatlearning.com/certificates?pb_id=581",
        name: "HTML Tags"
    },
    {
        image: "./assets/images/certificates/css.jpg",
        alt: "CSS Certificate",
        link: "https://olympus.mygreatlearning.com/certificates?pb_id=581",
        name: "CSS"
    },
    {
        image: "./assets/images/certificates/FrontEnd.jpg",
        alt: "Frontend Certificate",
        link: "https://olympus.mygreatlearning.com/certificates?pb_id=581",
        name: "Frontend"
    },

    {
        image: "./assets/images/certificates/Reactjs.jpg",
        alt: "React.js Certificate",
        link: "https://olympus.mygreatlearning.com/certificates?pb_id=581",
        name: "React.js"
    },
    {
        image: "./assets/images/certificates/C++.jpg",
        alt: "C++ Certificate",
        link: "https://olympus.mygreatlearning.com/certificates?pb_id=581",
        name: "C++"
    },

    {
        image: "./assets/images/certificates/ComputerNetworking.jpg",
        alt: "Computer Networking Certificate",
        link: "https://www.mindluster.com/profile",
        name: "Computer Networking"
    },


    {
        image: "./assets/images/certificates/gitandgithub.jpg",
        alt: "Git and Github Certificate",
        link: "https://www.mindluster.com/profile",
        name: "Git and Github"
    },
    {
        image: "./assets/images/certificates/MySql.jpg",
        alt: "MySQL Certificate",
        link: "https://www.mindluster.com/profile",
        name: "MySQL"
    },
    {
        image: "./assets/images/certificates/ecmascript.png",
        alt: "ECMAScript Certificate",
        link: "https://example.com/ecmascript",
        name: "ECMAScript"
    },

    {
        image: "./assets/images/certificates/Ai project.jpg",
        alt: "AI Project Certificate",
        link: "https://www.facebook.com/photo.php?fbid=771019001712604&set=a.233067268841116&type=3&mibextid=rS40aB7S9Ucbxw6v",
        name: "AI Project"
    },
    {
        image: "./assets/images/certificates/Coding.jpg",
        alt: "Coding Certificate",
        link: "https://example.com/coding",
        name: "Coding"
    },
    {
        image: "./assets/images/certificates/SST.jpg",
        alt: "SST Certificate",
        link: "https://example.com/sst",
        name: "SST"
    }
];

const container = document.getElementById("certificatesContainer");

certificates.forEach(cert => {
    const item = document.createElement("div");
    item.className = "certificate-item";
    item.innerHTML = `
    <div class="content">
      <div class="back">
        <div class="back-content">
          <a href="${cert.link}" target="_blank" rel="noopener noreferrer">
            <img src="${cert.image}" alt="${cert.alt}" style="width: 80%; border-radius: 4px;">
          </a>
          <p style="color: var(--primary-color); margin-top: 10px; font-size: 14px;">${cert.name}</p>
        </div>
      </div>
    </div>
  `;
    container.appendChild(item);
});

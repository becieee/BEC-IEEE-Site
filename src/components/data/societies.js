import varun from "../assets/Varun.jpeg"
import relStep from "../assets/relStep.png"
import suhana from "../assets/suhana.jpg"
import megha from "../assets/megha.jpg"

export const societiesData = [
  {
    id: "rel",
    name: "RELIABILITY",
    totalMembers: 42,
    totalPublications: 7199,
    shortDescription: "A global community advancing reliability engineering across hardware, software, and human factors.",
    description:
      "The IEEE Reliability Society (RS) serves as a professional home for Specialty Engineering disciplines, encompassing Reliability Engineering, System Safety, Prognostics and Health Management (PHM), Testability, System Security, Human System Interface (HIS), Human Factors (HF), Maintainability, Supportability, and Software Engineering with a focus on trust, system security, privacy, and cybersecurity. The society is dedicated to ensuring systems perform their intended functions throughout their life cycles by providing technical information via publications, training, conferences, and access to technical libraries.",
    logo: "https://rs.ieee.org/images/files/template/RS-header1.jpg",
    website: "https://rs.ieee.org/",
    vision:
      "To be the leading global community advancing reliability engineering and its applications across all engineering disciplines.",
    mission:
      "To provide resources, knowledge, and a collaborative platform for professionals engaged in ensuring system reliability throughout the entire life cycle.",
    events: [
      {
        id: "rel-event-1",
        title: "Visit to BEC-STEP (Science and Technology Entrepreneurship Park)",
        date: "2025-02-15",
        location: "BEC-STEP, Vidyagiri, Bagalkot, Karnataka, India",
        description:
          "The BEC IEEE Student Branch (STB35261) organized a visit to the Science and Technological Entrepreneurship Park (BEC-STEP) to provide IEEE members with insights into entrepreneurship, innovation, and technological advancements. The visit included:\n\n- An overview of BEC-STEP's role in supporting startups and the incubation facilities available.\n- Interactions with startup founders, discussing their innovative ideas, challenges faced, and business development processes.\n- Understanding the importance of technology-driven entrepreneurship and the role of institutions like BEC-STEP in fostering innovation.\n- Observing ongoing projects, gaining practical insights into real-world applications of engineering and business development.",
        image: `${relStep}`,
        registrationLink: "https://forms.gle/hKY6K6q3uGsXfEmZ8",
      },
    ],
    executiveCommittee: [
      {
        id: "99584336",
        name: "Varun Naik",
        position: "Chair",
        image:
          `${varun}`,
        bio:
          "CSE Undergrad | Driving Innovation as Membership Development Chair & IEEE Reliability Society Chair @ BEC-IEEE | Former Joint Webmaster | Committed to Advancing Technology for Humanity",
        email: "varu19@ieee.org",
        linkedin: "https://www.linkedin.com/in/varu19/",
        website:
          "https://v0-varun-portfolio-h7u7b8ovy-hellome19001-gmailcoms-projects.vercel.app/",
      },
      {
        id: "100676039",
        name: "Suhana Nadaf",
        position: "Secretary",
        image:
          `${suhana}`,
        bio:
          "As a Bachelor's student in Electronics & Communication Engineering, I serve as Secretary of the Reliability Society at BECIEEE Student Branch. I coordinate events, foster a culture of reliability, and strive to enhance academic and professional experiences for students.",
        email: "suhananadaf101@gmail.com",
        linkedin:
          "https://www.linkedin.com/in/suhana-n-9181ab293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        website: "",
      },
    ],
  },
  {
    id: "com",
    name: "COMSOC",
    totalMembers: 45,
    totalPublications: null,
    shortDescription:
      "The IEEE Communications Society is a global community advancing communication and networking technology through research, education, and innovation.",
    description:
      "The IEEE Communications Society (ComSoc) is a professional society of the IEEE that focuses on the advancement of science, technology, and applications in communications and networking. It provides a platform for researchers, engineers, and industry professionals to share knowledge, collaborate, and promote innovations in fields such as wireless communication, internet technologies, and data transmission. Through conferences, publications, and educational programs, ComSoc plays a key role in shaping the future of global communications.",
    logo: "https://www.comsoc.org/themes/custom/comsoc/components/images/ieee-comsoc.svg",
    website: "https://www.comsoc.org",
    vision:
      "To bring the world together in harmony through communications and networking technology research, application, education, and incubation of new ideas.",
    mission:
      "The IEEE Communications Society promotes technological innovation and fosters creation and sharing of information among the global technical community. The Society provides services to members for their technical and professional advancement and forums for technical exchanges among professionals in academia, industry, and public institutions.",
    events: [],
    executiveCommittee: [
      {
        id: "99901993",
        name: "Souparni Kulkarni",
        position: "Chair",
        image:
          "https://drive.google.com/file/d/1qkpbdMjUDo2owfdQ8oQhh_PbRcll29ov/view?usp=drivesdk",
        bio: "ECE undergraduate",
        email: "souparnikulkarni06@ieee.org",
        linkedin:
          "https://www.linkedin.com/in/souparni-kulkarni-a0a3172a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        website:
          "https://v0.dev/chat/portfolio-website-q0HUkVr0tIZ?b=b_NiK9xkAjrB1",
      },
    ],
  },
  {
    id: "vts",
    name: "VTS",
    totalMembers: 37,
    totalPublications: "📙IEEE Transactions on Vehicular Technology\nTotal Articles Published: Approximately 15,565 articles have been published since the journal's inception. ​\nAnnual Publications: In 2023, the journal published 1,537 articles. ​\nCitations: Over its lifetime, It has received 584,856 citations, reflecting its significant impact in the field. ​\nImpact Factor: The journal's 2023 Impact Factor is reported as 6.1, placing it in the Q1 category across multiple disciplines.",
    shortDescription:
      "The IEEE Vehicular Technology Society is an applications-oriented society of IEEE, with technical activities concentrated around three pillars: Wireless Communications, Land Transportation, and Motor Vehicles.",
    description:
      "The IEEE Vehicular Technology Society is an applications-oriented society of IEEE, with technical activities concentrated around three pillars: Wireless Communications, Land Transportation, and Motor Vehicles. VTS activities are carried out by volunteers, including reviewers, editors, conference organizers, standards committee participants, and local chapter volunteers. The affairs of the Society are managed by a set of elected volunteers, the Board of Governors (BoG).",
    logo: "https://vtsociety.org/files/ieeevts/vts-logo-with-text.svg",
    website: "https://vtsociety.org/",
    vision:
      "Be the association of reference for VT professionals’ needs in the areas of life-long learning, standards creation, dissemination of new technologies and networking.",
    mission:
      "The function of the Society is to promote its objectives through the leadership of its Officers and Members in encouraging the exchange of both technical and professional information among members of the Society, and other groups, societies, and chapters of the IEEE.",
    events: [],
    executiveCommittee: [
      {
        id: "99901949",
        name: "Megha Hadli",
        position: "Chair",
        image:
          `${megha}`,
        bio:
          "I'm an undergraduate student pursuing Electronics and Communication Engineering, with a strong interest in VLSI design and semiconductor technologies. Passionate about innovation and leadership, I currently serve as the VTS Chair at BEC IEEE, where I actively promote technical growth and collaboration among peers.",
        email: "Meghaahadli@ieee.org",
        linkedin:
          "https://www.linkedin.com/in/megha-hadli-17a51932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        website: "https://v0-smart-bike-stand-plan.vercel.app/",
      },
    ],
  },
];

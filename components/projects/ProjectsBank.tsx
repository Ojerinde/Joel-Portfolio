export interface ProjectsObj {
  id: number;
  name: string;
  liveUrl: string;
  imgUrl: string;
  githubUrl: string;
  description: string;
  stacks: string[];
}
const ProjectsBank: ProjectsObj[] = [
  {
    id: 1,
    name: "Blog App",
    liveUrl: "https://the-writing-room-with-firebase.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/TheWritingRoomWIthFireBase",
    imgUrl: "/images/projects/blogapp.png",
    description:
      "A website that hosts a collection of articles or posts written by one or multiple authors. The site typically features a homepage with the most recent posts displayed, as well as categories or tags to help users find posts on specific topics. Users can browse the site to read posts and leave comments, while authors can create and publish new content using an easy-to-use content management system. Many blog sites also allow users to subscribe to email updates or RSS feeds to stay up-to-date with new content.",
    stacks: ["react", "firebase"],
  },
  {
    id: 2,
    name: "Chat App",
    liveUrl: "https://ojerinde.github.io/",
    githubUrl: "https://github.com/Ojerinde/Hackathon",
    imgUrl: "/images/projects/chatapp.png",
    description:
      " This is a software application that enables users to communicate with each other in real-time through text messages. Chat apps can be used on various devices, including smartphones, tablets, and computers, and are typically available as standalone applications or integrated into social media platforms.  Users can create an account or sign in to an existing one to connect with other users on the platform. They can create individual or group conversations and send text messages, emojis, and multimedia files such as images, videos, and audio recordings.",
    stacks: ["javascript", "github"],
  },
  {
    id: 3,
    name: "Ask-Answer",
    liveUrl: "",
    githubUrl: "https://github.com/Ojerinde/Ask-Answer",
    imgUrl: "/images/projects/askanswer.png",
    description:
      "A Q&A platform designed for students and tutors to interact and exchange knowledge. Users can ask questions on any topic, and tutors can provide answers and explanations in a quick and easy manner. The app's user interface is intuitive and easy to navigate, with a search bar for users to find existing answers to similar questions. Users can also filter questions by subject or category to find specific topics they need help with.",
    stacks: ["python (flask)", "react"],
  },
  {
    id: 4,
    name: "GitHub Portfolio",
    liveUrl: "https://github-portfolio-vue.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/AltSchoolThirdSemesterExamination",
    imgUrl: "/images/projects/vuegithub.png",
    description:
      "A platform shows the collection of a developer's code repositories hosted on GitHub. It serves as a showcase of the developer's skills, experience, and projects. The portfolio typically includes a README file, which contains a brief description of the developer's work and links to their projects. A GitHub portfolio can be customized to showcase a developer's best work, with the most relevant projects pinned to the top of their repository list. It can also include links to the developer's personal website, social media accounts, and resume.",
    stacks: ["vue (vuex)", "github api"],
  },
  {
    id: 5,
    name: "Opspad",
    liveUrl: "https://opspad.dev/",
    githubUrl: "https://github.com/workshopapps/devopsnotepad.desktop",
    imgUrl: "/images/projects/opspad.png",
    description:
      "This is a software application designed to help system administrators manage and monitor one or more servers. The app provides a dashboard that displays real-time information about the server's performance, including CPU and memory usage, disk space, and network traffic. The app allows administrators to remotely access and manage the server, making it easy to troubleshoot issues, configure settings, and install updates. The app may also include features such as automated backups, disaster recovery, and security monitoring to ensure that the server remains secure and stable.",
    stacks: ["collaboration", "react"],
  },
  {
    id: 6,
    name: "FoodApp",
    liveUrl: "https://foodshop-joe.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/Forkify_Course-Project",
    imgUrl: "/images/projects/foodapp.png",
    description:
      "A software application designed to provide users with comprehensive information about a specific food item. The app allows users to search for a particular food and access a variety of information such as its origin, nutritional value, health benefits, culinary uses, and cultural significance. Users can also use the app to browse through a wide range of recipes featuring the food item, as well as reviews and ratings from other users who have tried the recipes. The app may also provide information on where to buy the food item or recommend alternative ingredients if it is not available in the user's location.",
    stacks: ["javascript", "html & css"],
  },
  {
    id: 7,
    name: "RestCountries",
    liveUrl: "",
    githubUrl: "https://github.com/Ojerinde/RestCountries_With_NextJs",
    imgUrl: "/images/projects/blogapp.png",
    description:
      "A software application designed to provide users with comprehensive information about different countries across the world. The app allows users to search for a specific country and access a variety of information such as its location, population, capital city, languages spoken, currency, and major landmarks.",
    stacks: ["nextjs", "api"],
  },
  {
    id: 8,
    name: "MySchool",
    liveUrl: "https://myschool-joe.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/MySchool",
    imgUrl: "/images/projects/myschool.png",
    description:
      "A web application designed to facilitate and enhance the learning experience of students enrolled in the tech school. The app provides access to course materials, assignments, and resources, as well as tools to help students and teachers stay organized and on track.",
    stacks: ["javascript", "react"],
  },
  {
    id: 9,
    name: "Fake Auth",
    liveUrl: "https://fake-authentication.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/FakeAuthentication",
    imgUrl: "/images/projects/fakeauth.png",
    description:
      "A software application that simulates the login process without actually verifying the user's credentials. The app may create a mock login page or simply provide a pre-filled form that grants access to the app's features without verifying the user's identity.",
    stacks: ["github api", "react"],
  },
  {
    id: 10,
    name: "GitHub",
    liveUrl: "https://github-joe.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/Github_portfolio",
    imgUrl: "/images/projects/reactgithub.png",
    description:
      "A platform shows the collection of a developer's code repositories hosted on GitHub. It serves as a showcase of the developer's skills, experience, and projects. The portfolio typically includes a README file, which contains a brief description of the developer's work and links to their projects. A GitHub portfolio can be customized to showcase a developer's best work, with the most relevant projects pinned to the top of their repository list. It can also include links to the developer's personal website, social media accounts, and resume.",
    stacks: ["github api", "react"],
  },
];
export default ProjectsBank;

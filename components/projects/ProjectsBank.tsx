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
      "In this application, I used firebase as my backend to sign up, login, create article, add comment.",
    stacks: ["react", "firebase"],
  },
  {
    id: 2,
    name: "Chat App",
    liveUrl: "https://ojerinde.github.io/",
    githubUrl: "https://github.com/Ojerinde/Hackathon",
    imgUrl: "/images/projects/chatapp.png",
    description:
      "Welcome to a simple Chat App, a real-time chat application that allows users to communicate with each other in a fast and seamless way. Simple Chat App was created for a hackathon with the goal of providing a simple and easy-to-use chat platform for people to connect and communicate.",
    stacks: ["javascript", "github"],
  },
  {
    id: 3,
    name: "Ask-Answer",
    liveUrl: "",
    githubUrl: "https://github.com/Ojerinde/Ask-Answer",
    imgUrl: "/images/projects/askanswer.png",
    description:
      "An application to ask a question or to answer questions. It is an application I am building for my online school because I observed some questions are not answered due to many messages in the school channel",
    stacks: ["python (flask)", "react"],
  },
  {
    id: 4,
    name: "GitHub Portfolio",
    liveUrl: "https://github-portfolio-vue.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/AltSchoolThirdSemesterExamination",
    imgUrl: "/images/projects/vuegithub.png",
    description:
      "In this task, I utilized the GitHub API to retrieve my GitHub information. Additionally, I constructed a custom composition function and I worked with both the Options and Composition API.",
    stacks: ["vue (vuex)", "github api"],
  },
  {
    id: 5,
    name: "Opspad",
    liveUrl: "https://opspad.dev/",
    githubUrl: "https://github.com/workshopapps/devopsnotepad.desktop",
    imgUrl: "/images/projects/opspad.png",
    description: "This is the final project in a JavaScript course I took.",
    stacks: ["collaboration", "react"],
  },
  {
    id: 6,
    name: "FoodApp",
    liveUrl: "https://foodshop-joe.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/Forkify_Course-Project",
    imgUrl: "/images/projects/foodapp.png",
    description: "This is the final project in a JavaScript course I took.",
    stacks: ["javascript", "html & css"],
  },
  {
    id: 7,
    name: "RestCountries",
    liveUrl: "",
    githubUrl: "https://github.com/Ojerinde/RestCountries_With_NextJs",
    imgUrl: "/images/projects/.png",
    description:
      "A web app for visualizing personalized Spotify data. View yourtop artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    stacks: ["nextjs", "restcountries api"],
  },
  {
    id: 8,
    name: "MySchool",
    liveUrl: "https://myschool-joe.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/MySchool",
    imgUrl: "/images/projects/myschool.png",
    description:
      "In this project I implemented, React-router, Nested routes, 404 page, Error boundary, and Client-side pagination. I used randomuser.me API as my backend.",
    stacks: ["javascript", "react"],
  },
  {
    id: 9,
    name: "Fake Auth",
    liveUrl: "https://fake-authentication.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/FakeAuthentication",
    imgUrl: "/images/projects/fakeauth.png",
    description:
      "In this project, I fetched my Github repositories and details using Github API, I used react-router to implement nexted routes, 404 page, I also set up Error boundary, custom hooks, and SEO.",
    stacks: ["github api", "react"],
  },
  {
    id: 10,
    name: "GitHub",
    liveUrl: "https://github-joe.netlify.app/",
    githubUrl: "https://github.com/Ojerinde/Github_portfolio",
    imgUrl: "/images/projects/reactgithub.png",
    description:
      "In this project, I fetched my Github repositories and details using Github API, I used react-router to implement nexted routes, 404 page, I also set up Error boundary, custom hooks, and SEO.",
    stacks: ["github api", "react"],
  },
];
export default ProjectsBank;

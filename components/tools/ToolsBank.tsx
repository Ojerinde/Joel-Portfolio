export interface ToolsObj {
  id: number;
  name: string;
  docUrl: string;
  imgUrl: string;
  // icon: JSX.Element;
}
const ProficientToolsBank: ToolsObj[] = [
  {
    id: 1,
    name: "HTML",
    docUrl: "",
    imgUrl: "/images/html.png",
  },
  { id: 2, name: "CSS", docUrl: "", imgUrl: "/images/css.png" },
  {
    id: 3,
    name: "SCSS",
    docUrl: "",
    imgUrl: "/images/sass.png",
  },
  {
    id: 3,
    name: "JS",
    docUrl: "",
    imgUrl: "/images/js.png",
  },
  {
    id: 3,
    name: "TS",
    docUrl: "",
    imgUrl: "/images/ts.png",
  },
  { id: 4, name: "ReactJS", docUrl: "", imgUrl: "/images/react.png" },
  {
    id: 5,
    name: "NextJs",
    docUrl: "",
    imgUrl: "/images/nextjs.png",
  },
  { id: 6, name: "VueJs", docUrl: "", imgUrl: "/images/vue.png" },
  {
    id: 7,
    name: "Python",
    docUrl: "",
    imgUrl: "/images/python.png",
  },
  { id: 8, name: "GitHub", docUrl: "", imgUrl: "/images/github.png" },
  { id: 9, name: "Redux", docUrl: "", imgUrl: "/images/redux.png" },
];
export default ProficientToolsBank;

export const ModerateToolsBank: ToolsObj[] = [
  { id: 1, name: "Docker", docUrl: "", imgUrl: "/images/docker.png" },
  { id: 2, name: "AWS", docUrl: "", imgUrl: "/images/aws.png" },
  {
    id: 3,
    name: "Postgres",
    docUrl: "",
    imgUrl: "/images/postgres.png",
  },
  {
    id: 4,
    name: "CI/CD",
    docUrl: "",
    imgUrl: "/images/cicd.png",
  },
  { id: 5, name: "Auth", docUrl: "", imgUrl: "/images/auth0.svg" },
  { id: 6, name: "Flask", docUrl: "", imgUrl: "/images/flask.png" },
];

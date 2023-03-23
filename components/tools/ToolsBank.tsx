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
    imgUrl: "/images/tools/html.png",
  },
  { id: 2, name: "CSS", docUrl: "", imgUrl: "/images/tools/css.png" },
  {
    id: 3,
    name: "SCSS",
    docUrl: "",
    imgUrl: "/images/tools/sass.png",
  },
  {
    id: 3,
    name: "JS",
    docUrl: "",
    imgUrl: "/images/tools/js.png",
  },
  {
    id: 3,
    name: "TS",
    docUrl: "",
    imgUrl: "/images/tools/ts.png",
  },
  { id: 4, name: "ReactJS", docUrl: "", imgUrl: "/images/tools/react.png" },
  {
    id: 5,
    name: "NextJs",
    docUrl: "",
    imgUrl: "/images/tools/nextjs.png",
  },
  { id: 6, name: "VueJs", docUrl: "", imgUrl: "/images/tools/vue.png" },
  {
    id: 7,
    name: "Python",
    docUrl: "",
    imgUrl: "/images/tools/python.png",
  },
  { id: 8, name: "GitHub", docUrl: "", imgUrl: "/images/tools/github.png" },
  { id: 9, name: "Redux", docUrl: "", imgUrl: "/images/tools/redux.png" },
];
export default ProficientToolsBank;

export const ModerateToolsBank: ToolsObj[] = [
  { id: 1, name: "Docker", docUrl: "", imgUrl: "/images/tools/docker.png" },
  { id: 2, name: "AWS", docUrl: "", imgUrl: "/images/tools/aws.png" },
  {
    id: 3,
    name: "Postgres",
    docUrl: "",
    imgUrl: "/images/tools/postgres.png",
  },
  {
    id: 4,
    name: "CI/CD",
    docUrl: "",
    imgUrl: "/images/tools/cicd.png",
  },
  { id: 5, name: "Auth", docUrl: "", imgUrl: "/images/tools/auth0.svg" },
  { id: 6, name: "Flask", docUrl: "", imgUrl: "/images/tools/flask.png" },
];

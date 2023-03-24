export interface BlogObj {
  id: number;
  name: string;
  docUrl: string;
  imgUrl: string;
  description: string;
  stacks: string[];
}
const BlogsBank: BlogObj[] = [
  {
    id: 1,
    name: "How to build a React application",
    docUrl:
      "https://jor-el.hashnode.dev/how-to-build-a-react-application-that-integrates-with-the-github-api-and-utilizes-various-react-libraries",
    imgUrl: "/images/blogs/reactapp.png",
    description:
      "React is a JavaScript library used for building user interfaces",
    stacks: ["javascript", "react"],
  },
  {
    id: 2,
    name: "How to use React useState hook like a Pro.",
    docUrl:
      "https://jor-el.hashnode.dev/how-to-use-react-usestate-hook-like-a-pro",
    imgUrl: "/images/blogs/usestate.png",
    description:
      "The useState hook is one of the many hooks shipped with React and is used for managing states in React. Another hook that performs a similar function is the useReducer hook, but they differ in how they are used",
    stacks: ["javascript", "react"],
  },

  {
    id: 3,
    name: "'This' Keyword.",
    docUrl: "https://jor-el.hashnode.dev/this-keyword",
    imgUrl: "/images/blogs/this.jpg",
    description:
      "In this article, we are going to see what the this keyword is and why it is important to know how to configure it",
    stacks: ["javascript", "react"],
  },
  {
    id: 4,
    name: "Short Circuiting in JavaScript.",
    docUrl: "https://jor-el.hashnode.dev/short-circuiting-in-javascript",
    imgUrl: "/images/blogs/shortcircuiting.png",
    description:
      "When a part of an expression is evaluated and the remaining part of the expression won’t affect the evaluated result, then the remaining expression won’t be evaluated and this is what short-circuiting is",
    stacks: ["javascript", "react"],
  },
];
export default BlogsBank;

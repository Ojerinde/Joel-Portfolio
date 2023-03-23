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
    name: "HTML",
    docUrl: "",
    imgUrl: "/images/test.jpg",
    description:
      "A web app for visualizing personalized Spotify data. View yourtop artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    stacks: ["javascript", "react"],
  },
  {
    id: 2,
    name: "CSS",
    docUrl: "",
    imgUrl: "/images/test.jpg",
    description:
      "A web app for visualizing personalized Spotify data. View yourtop artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    stacks: ["javascript", "react"],
  },

  {
    id: 3,
    name: "JS",
    docUrl: "",
    imgUrl: "/images/test.jpg",
    description:
      "A web app for visualizing personalized Spotify data. View yourtop artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    stacks: ["javascript", "react"],
  },
  {
    id: 4,
    name: "TS",
    docUrl: "",
    imgUrl: "/images/test.jpg",
    description:
      "A web app for visualizing personalized Spotify data. View yourtop artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    stacks: ["javascript", "react"],
  },
];
export default BlogsBank;

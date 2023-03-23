import AboutMe from "@/components/about";
import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Alltools from "@/components/tools";
import Tracks from "@/components/tracks";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ojerinde Joel</title>
        <meta name="description" content="Ojerinde Joel PortFolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tracks />
      <AboutMe />
      <Alltools />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

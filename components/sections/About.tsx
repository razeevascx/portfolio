import * as motion from "motion/react-client";
import Items from "@/components/ui/Items";
import Container from "@/components/Container";
import ProfileCard from "../ui/ProfileCard";
import { getProjectData } from "@/lib/projectdata";
import { getCredlyBadges } from "@/lib/credly";
import { getBlogPosts } from "@/lib/notion/blog";


const About = async () => {
  const [projects, badges, posts] = await Promise.all([
    getProjectData(),
    getCredlyBadges(),
    getBlogPosts()
  ]);

  const stats = {
    projects: projects.length,
    badges: badges.length,
    posts: posts.length,
    stars: projects.reduce((acc, p) => acc + (p.stars || 0), 0)
  };

  return (
    <Container
      id="about"
      className="w-full p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Items
        Number="03"
        title="About Me"
        des="Full-stack developer specializing in high-performance web applications built with clean, scalable code to drive user growth and digital transformation."
      />

      <ProfileCard stats={stats} />

    </Container>
  );
};

export default About;

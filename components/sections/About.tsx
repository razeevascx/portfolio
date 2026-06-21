import Items from "@/components/ui/Items";
import Container from "@/components/Container";
import ProfileCard from "../ui/ProfileCard";

const About = async ({ isPage = false }: { isPage?: boolean }) => {

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
        headingTag={isPage ? "h1" : "h2"}
        des="Full-stack developer specializing in high-performance web applications built with clean, scalable code to drive user growth and digital transformation."
      />

      <ProfileCard />

    </Container>
  );
};

export default About;

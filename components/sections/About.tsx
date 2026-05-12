import * as motion from "motion/react-client";
import Items from "@/components/ui/Items";
import Container from "@/components/Container";
import { libraries } from "@/lib/skills-data";
import ProfileCard from "../ui/ProfileCard";
import SkillCard1 from "@/components/cards/SkillCard";
import CertificateCard from "@/components/cards/CertificateCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getCredlyBadges } from "@/lib/credly";

const About = async () => {
  const badges = await getCredlyBadges();

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

      <ProfileCard />

      {badges && badges.length > 0 && (
        <motion.div className="mb-8 space-y-8">
          <div>
            <SectionHeading className="mb-8">
              Certifications & Badges
            </SectionHeading>
            {badges.map((item) => (
              <CertificateCard key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      )}
      <div className="mb-16">
        <SectionHeading className="mb-12">Frameworks & Tools</SectionHeading>
        <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {libraries.map((skill) => (
            <SkillCard1 key={skill.label} skill={skill} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;

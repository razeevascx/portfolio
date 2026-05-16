import * as motion from "motion/react-client";
import Items from "@/components/ui/Items";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/lib/constants";
import Container from "@/components/Container";

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Container className="w-full p-5 mx-auto" id="services">
      <Items
        Number="01"
        title="Here's How I Can Help You"
        des="Providing expert software engineering services focused on speed optimization, technical SEO, and secure backend infrastructure to drive measurable growth and seamless user experiences."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-max"
      >
        {services.slice(0, 5)
          .map((service, index) => (
            <ServiceCard
              key={`core-${(service as any).id ?? index}`}
              service={service}
              index={index}
                            className={service.gridClass}

            />
          ))}
      </motion.div>
    </Container>
  );
};

export default Service;

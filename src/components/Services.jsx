"use client";

import { Dumbbell, Laptop, Utensils } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Services = () => {
  const services = [
    {
      icon: <Dumbbell size={32} />,
      title: "1-on-1 Personal Training",
      description:
        "Personalized workouts tailored to your goals, fitness level, and experience. In-person sessions to maximize strength and progress.",
    },
    {
      icon: <Laptop size={32} />,
      title: "Online Coaching",
      description:
        "Flexible online programs with customized workouts and weekly check-ins. Expert guidance and accountability wherever you are.",
    },
    {
      icon: <Utensils size={32} />,
      title: "Nutrition Guidance",
      description:
        "Nutrition strategies designed to support your training goals, improve energy, and help you see sustainable results.",
    },
  ];

  return (
    <section className="py-12 bg-gray-900 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center">
          <h2 className="group text-3xl font-bold text-gray-300 text-center mb-8 relative inline-block">
            Services
            <span className="block h-0.5 bg-amber-500 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const controls = useAnimation();
            const [ref, inView] = useInView({ triggerOnce: true });

            useEffect(() => {
              if (inView) {
                controls.start("visible");
              }
            }, [controls, inView]);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.2 },
                  },
                }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4 text-amber-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

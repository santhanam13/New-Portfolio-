import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-neutral-950 font-sans relative overflow-hidden"
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl mb-4 text-left text-white">
          Changelog from my journey
        </h2>
     
      </div>

      {/* Timeline Content */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 md:pb-20">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px]">
          {/* Background Line */}
          <div className="h-full w-full bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]" />

          {/* Animated Line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {/* Timeline Items */}
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row pt-8 md:pt-24">
            {/* Title Section */}
            <div className="sticky top-20 z-40 flex items-center md:w-1/3 pl-12 md:pl-0 mb-4 md:mb-0">
              <div className="absolute left-3 md:left-7 w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-neutral-800 border border-neutral-700" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold text-neutral-500 md:pl-16">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="pl-12 md:pl-8 pr-4 md:pr-8 md:w-2/3">
              <div className="prose prose-invert max-w-none">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

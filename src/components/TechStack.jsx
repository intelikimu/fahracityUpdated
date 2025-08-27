"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ServiceCard } from "./GlassmorphismCard"
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa"
import {
  SiTensorflow,
  SiMongodb,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiDjango,
  SiKubernetes,
  SiRedis,
  SiElasticsearch,
  SiPytorch,
  SiOpencv,
  SiEthereum,
  SiSolidity,
  SiChainlink,
  SiHyper,
} from "react-icons/si"

const techStack = [
  { name: "React", icon: <FaReact size={48} className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs size={48} className="text-blue-500" /> },
  { name: "Python", icon: <FaPython size={48} className="text-blue-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={48} className="text-blue-500" /> },
  { name: "PyTorch", icon: <SiPytorch size={48} className="text-blue-500" /> },
  { name: "OpenCV", icon: <SiOpencv size={48} className="text-blue-500" /> },
  { name: "Ethereum", icon: <SiEthereum size={48} className="text-blue-500" /> },
  { name: "Solidity", icon: <SiSolidity size={48} className="text-blue-500" /> },
  { name: "Chainlink", icon: <SiChainlink size={48} className="text-blue-500" /> },
  { name: "Hyperledger", icon: <SiHyper size={48} className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws size={48} className="text-blue-500" /> },
  { name: "Docker", icon: <FaDocker size={48} className="text-blue-500" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={48} className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={48} className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={48} className="text-blue-500" /> },
  { name: "TypeScript", icon: <SiTypescript size={48} className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={48} className="text-blue-500" /> },
  { name: "Django", icon: <SiDjango size={48} className="text-blue-500" /> },
  { name: "Redis", icon: <SiRedis size={48} className="text-blue-500" /> },
  { name: "Elasticsearch", icon: <SiElasticsearch size={48} className="text-blue-500" /> },
  { name: "GraphQL", icon: <SiGraphql size={48} className="text-blue-500" /> },
]

export default function TechStack() {
  const marqueeRef1 = useRef(null)
  const marqueeRef2 = useRef(null)

  useEffect(() => {
    const animateMarquee = (ref, direction = "left") => {
      const el = ref.current
      if (!el) return

      // Calculate the width of one complete set of items
      const itemWidth = 192 // 180px min-width + 24px margin (12px each side)
      const totalItems = techStack.length
      const singleSetWidth = itemWidth * totalItems

      // Set initial position based on direction
      if (direction === "left") {
        gsap.set(el, { x: 0 })
        gsap.to(el, {
          x: -singleSetWidth,
          duration: 30,
          ease: "none",
          repeat: -1,
        })
      } else {
        gsap.set(el, { x: -singleSetWidth })
        gsap.to(el, {
          x: 0,
          duration: 30,
          ease: "none",
          repeat: -1,
        })
      }
    }

    animateMarquee(marqueeRef1, "left")   // Row 1 → Right to Left
    animateMarquee(marqueeRef2, "right")  // Row 2 → Left to Right

    return () => {
      gsap.killTweensOf(marqueeRef1.current)
      gsap.killTweensOf(marqueeRef2.current)
    }
  }, [])

  const TechItem = ({ tech, index }) => (
    <div key={index} className="flex items-center justify-center mx-3 min-w-[180px] flex-shrink-0">
      <ServiceCard className="text-center w-full">
        <div className="mb-2 mx-auto flex justify-center bg-blue-500/10 rounded-full w-16 h-16 items-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
          {tech.icon}
        </div>
        <div className="font-medium text-gray-300">{tech.name}</div>
      </ServiceCard>
    </div>
  )

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-100"
        >
          Our Tech Stack
        </motion.h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We leverage cutting-edge technologies to deliver powerful solutions
        </p>
      </div>

      {/* Row 1 → moves RIGHT to LEFT */}
      <div className="overflow-hidden whitespace-nowrap relative py-6">
        <div ref={marqueeRef1} className="flex">
          {/* First set */}
          {techStack.map((tech, i) => (
            <TechItem key={`set1-${i}`} tech={tech} index={i} />
          ))}
          {/* Second set for seamless loop */}
          {techStack.map((tech, i) => (
            <TechItem key={`set2-${i}`} tech={tech} index={i} />
          ))}
        </div>
      </div>

      {/* Row 2 → moves LEFT to RIGHT */}
      <div className="overflow-hidden whitespace-nowrap relative py-6">
        <div ref={marqueeRef2} className="flex">
          {/* First set */}
          {techStack.map((tech, i) => (
            <TechItem key={`row2-set1-${i}`} tech={tech} index={i} />
          ))}
          {/* Second set for seamless loop */}
          {techStack.map((tech, i) => (
            <TechItem key={`row2-set2-${i}`} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
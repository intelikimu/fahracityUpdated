"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaImage } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

/**
 * Enhanced Projects Section (JSX)
 * - Gradient glow border + spotlight hover + subtle 3D tilt
 * - Shimmer skeleton + image fallback
 * - Search + multi-select category filters + sort
 * - Accessible and mobile-first
 */

// Demo data (swap with your source)
const projects = [
  {
    id: 1,
    title: "AI Chatbot Platform",
    categories: ["AI", "Chatbot", "Crypto"],
    description:
      "Decentralized autonomous organization (DAO) & digital wallet for token purchases, lending, staking, cross-border payments and efficient fiat↔crypto conversions.",
    images: ["/assets/aichatbot.png", "/assets/aichatbot.png"],
    link: "https://degenforest.com/",
  },
  {
    id: 2,
    title: "NFSTAY",
    categories: ["NFT", "DeFi", "Staking"],
    description:
      "Real-world asset (RWA) tokenization for real estate, enabling fractional ownership and seamless rental-yield distribution.",
    images: ["/assets/nfstay1.png", "/assets/nfstay1.png"],
    link: "https://nfstay.com",
  },
  {
    id: 3,
    title: "Crypto Index Pool",
    categories: ["DeFi", "Staking"],
    description:
      "Staking dashboard for CIP tokens, with real-time reward tracking, portfolio management and performance analytics.",
    images: ["/assets/crypto.png", "/assets/crypto.png"],
    link: "https://cip-staking-new.vercel.app/",
  },
  {
    id: 4,
    title: "Crypto On Discount",
    categories: ["Crypto", "Deals"],
    description:
      "Discounted crypto purchases platform with investment tracking, referral rewards, ROI monitoring and bonus incentives.",
    images: ["/assets/cryptoon.png", "/assets/cryptoon.png"],
    link: "https://cryptoondiscount.com",
  },
  {
    id: 5,
    title: "Smashnft",
    categories: ["NFT", "Marketplace"],
    description:
      "Ethereum-based NFT marketplace for exploring, buying, selling and managing digital collectibles, with full metadata & provenance.",
    images: ["/assets/smashnft.png", "/assets/smashnft.png"],
    link: "https://nft.smashpay.io/ethereum",
  },
];



const categoryStyles = {
  AI: "border border-blue-500 text-blue-300 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.35)]",
  Chatbot: "border border-indigo-500 text-indigo-300 bg-indigo-500/10 shadow-[0_0_10px_rgba(99,102,241,0.35)]",
  NFT: "border border-pink-500 text-pink-300 bg-pink-500/10 shadow-[0_0_10px_rgba(236,72,153,0.35)]",
  DeFi: "border border-emerald-500 text-emerald-300 bg-emerald-500/10 shadow-[0_0_10px_rgba(16,185,129,0.35)]",
  Staking: "border border-yellow-500 text-yellow-300 bg-yellow-500/10 shadow-[0_0_10px_rgba(234,179,8,0.35)]",
  Crypto: "border border-purple-500 text-purple-300 bg-purple-500/10 shadow-[0_0_10px_rgba(147,51,234,0.35)]",
  Deals: "border border-red-500 text-red-300 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.35)]",
  Marketplace: "border border-teal-500 text-teal-300 bg-teal-500/10 shadow-[0_0_10px_rgba(20,184,166,0.35)]",
};

// simple classnames
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Spotlight + tilt wrapper
function SpotlightCard({ children, className }) {
  const ref = useRef(null);
  const controls = useAnimation();

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 8;
    controls.start({
      rotateX,
      rotateY,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    });

    el.style.setProperty("--spot-x", `${px * 100}%`);
    el.style.setProperty("--spot-y", `${py * 100}%`);
  }

  function handleMouseLeave() {
    controls.start({
      rotateX: 0,
      rotateY: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      className={cx(
        "group relative rounded-2xl border border-slate-700/50 bg-gradient-to-b from-slate-900/70 to-slate-900/30",
        "backdrop-blur supports-[backdrop-filter]:bg-slate-900/40",
        "shadow-xl transition-all duration-300",
        "[transform-style:preserve-3d]",
        // gradient border glow tracking cursor position
        "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:[background:radial-gradient(120px_circle_at_var(--spot-x,_50%)_var(--spot-y,_50%),rgba(59,130,246,0.45),transparent_60%),linear-gradient(120deg,rgba(59,130,246,.35),rgba(99,102,241,.35),rgba(236,72,153,.35))] before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none",
        "hover:before:opacity-100",
        className
      )}
      style={{ perspective: 1000 }}
    >
      <div className="relative rounded-2xl bg-slate-900/60">{children}</div>
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(180px 180px at var(--spot-x,50%) var(--spot-y,50%), rgba(255,255,255,0.06), transparent 60%)",
        }}
      />
    </motion.div>
  );
}

function Shimmer() {
  return (
    <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,.06),rgba(255,255,255,.12),rgba(255,255,255,.06))] bg-[length:200%_100%]" />
  );
}

export default function EnhancedProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [imageErrors, setImageErrors] = useState({});
  const [query, setQuery] = useState("");
  const [activeCats, setActiveCats] = useState([]);
  const [sortBy, setSortBy] = useState("recent"); // "recent" | "alpha"

  const allCats = useMemo(() => {
    const s = new Set();
    projects.forEach(p => p.categories.forEach(c => s.add(c)));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    let list = projects
      .filter(p =>
        [p.title, p.description, p.categories.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      )
      // AND logic: must include all active cats
      .filter(p => (activeCats.length ? activeCats.every(c => p.categories.includes(c)) : true));

    if (sortBy === "alpha") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "recent") list = [...list].sort((a, b) => b.id - a.id);
    return list;
  }, [query, activeCats, sortBy]);

  return (
    <section ref={ref} className="relative bg-black/90 min-h-screen py-16 sm:py-20 lg:py-24">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_30deg,rgba(59,130,246,0.15),rgba(236,72,153,0.15),rgba(20,184,166,0.15),rgba(59,130,246,0.15))] blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Our Projects</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-blue-500" />
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Explore featured case studies with a bit more sparkle and a lot less boredom.
          </p>
        </motion.div>

    

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filtered.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <SpotlightCard>
                {/* Media */}
                <div className="relative h-44 overflow-hidden rounded-t-2xl sm:h-52">
                  {!imageErrors[project.id] ? (
                    <>
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={idx < 3}
                        onError={() => setImageErrors(prev => ({ ...prev, [project.id]: true }))}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-800/40">
                      <FaImage className="h-10 w-10 text-slate-500" />
                    </div>
                  )}

                  {/* top-right external link */}
                  <div className="absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600/60 bg-slate-900/70 text-slate-200 backdrop-blur hover:border-blue-400/60 hover:bg-blue-500/20"
                      aria-label={`Open ${project.title}`}
                    >
                      <HiOutlineArrowTopRightOnSquare className="h-5 w-5" />
                    </Link>
                  </div>

                  {/* shimmer during image load */}
                  <Shimmer />
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="line-clamp-1 text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.categories.map(cat => (
                      <span
                        key={cat}
                        className={cx(
                          "rounded-full px-2.5 py-1 text-[11px] font-medium",
                          categoryStyles[cat] || "border border-slate-600 text-slate-300",
                          "transition-transform hover:scale-[1.04]"
                        )}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* footer */}
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
                    >
                      View Project
                      <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    </Link>

                    {/* decorative dots */}
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
                      <span className="h-1.5 w-1.5 rounded-full bg-pink-400/80" />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

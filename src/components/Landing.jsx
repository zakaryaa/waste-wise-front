// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  CompostKingSVG,
  GlassGuardianSVG,
  MetalMachineSVG,
  PaperPalSVG,
  PlasticProtectorSVG,
  TossTimerSVG,
} from "./../Utils";
import { UploadSection } from "./UploadSection";
const RecyclingBin = ({ color, title, description, iconSvg }) => {
  const colorMap = {
    blue: "border-blue-500 bg-blue-100 hover:bg-blue-200",
    yellow: "border-yellow-500 bg-yellow-100 hover:bg-yellow-200",
    green: "border-green-500 bg-green-100 hover:bg-green-200",
    gray: "border-gray-500 bg-gray-200 hover:bg-gray-300", // Metal
    brown: "border-amber-700 bg-amber-100 hover:bg-amber-200", // Organic/Compost
    red: "border-red-500 bg-red-100 hover:bg-red-200", // General/Non-Recyclable
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, rotate: 1 }} // Slight hover tilt
      whileTap={{ scale: 0.95 }}
      // Simulating a drop-target class (e.g., is-drop-target)
      className={`p-6 rounded-2xl shadow-xl transition-all duration-300 border-b-8 ${colorMap[color]} cursor-pointer`}
    >
      <div className="flex justify-center mb-4">
        <motion.div
          animate={{ y: [0, -5, 0] }} // Gentle pulse animation
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20"
        >
          {iconSvg}
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 text-center">{title}</h3>
      <p className="text-sm text-gray-600 mt-1 text-center">{description}</p>
    </motion.div>
  );
};

/* =========================
   LandingPage (separate component inside file)
   - Uses UploadSection as CTA inside hero
   - Kid-friendly design, SVGs, Framer Motion
   ========================= */

export const LandingPage = ({ onFileChange, onCameraClick }) => {
  useEffect(() => {
    // small tilt-follow for hero decorative blob
    const handleMove = (e) => {
      const blob = document.getElementById("hero-blob");
      if (!blob) return;
      const rect = blob.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      blob.style.transform = `translate(${dx * 6}px, ${dy * 6}px) rotate(${
        dx * 6
      }deg)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Motion variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-10"
    >
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
      >
        {/* Decorative SVG blobs */}
        <div className="absolute -z-10 left-0 top-0 pointer-events-none">
          <svg
            width="420"
            height="420"
            viewBox="0 0 420 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#A7F3D0" />
                <stop offset="1" stopColor="#BBF7D0" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="120" r="160" fill="url(#g1)" opacity="0.22" />
          </svg>
        </div>

        <div className="space-y-4 px-2">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-200 to-green-100 px-3 py-1 rounded-full">
            <img src="assets/logo.png" className="w-16"></img>
            <span className="font-semibold text-green-800">
              Waste Wise — Learn & Play
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 rounded-full border-2 border-yellow-400 bg-yellow-300 font-semibold shadow-md hover:brightness-105"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight / 2,
                  behavior: "smooth",
                })
              }
            >
              See how it works
            </motion.button>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Sort trash like a superhero ♻️
          </h1>
          <br />
          <p className="text-gray-700 max-w-xl">
            Upload a photo or take one with your camera. The AI will guess the
            trash type and give friendly recycling tips — then you try to beat
            the AI!
          </p>

          {/* CTA area: UploadSection injected here */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-3">
              <UploadSection
                onFileChange={onFileChange}
                onCameraClick={onCameraClick}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="rounded-lg p-3 bg-white shadow-sm flex items-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="flex-shrink-0"
              >
                <path
                  fill="#10B981"
                  d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 14h-2v-6h2zM12 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                />
              </svg>
              <div className="text-sm">
                <div className="font-semibold">Kid-friendly</div>
                <div className="text-gray-500">
                  Simple language & bright visuals
                </div>
              </div>
            </div>
            <div className="rounded-lg p-3 bg-white shadow-sm flex items-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="flex-shrink-0"
              >
                <path fill="#3B82F6" d="M12 2l3 7h-6l3-7zM6 9h12v11H6z" />
              </svg>
              <div className="text-sm">
                <div className="font-semibold">Interactive</div>
                <div className="text-gray-500">Play, learn, and re-try</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero illustration / images for kids */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center"
        >
          <div id="hero-blob" className="relative w-full max-w-md">
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-3xl ">
              <img
                src="/assets/image-1.png"
                alt="hero"
                className="w-full h-[348px] object-contain"
              />
            </motion.div>

            {/* playful mascot SVG */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-0 -right-6"
            >
              <svg width="130" height="130" viewBox="0 0 130 130">
                <g>
                  {/* Soft circular body */}
                  <circle
                    cx="65"
                    cy="65"
                    r="58"
                    fill="#ECFDF5"
                    stroke="#34D399"
                    strokeWidth="3"
                  />

                  {/* Eyes */}
                  <circle cx="48" cy="55" r="10" fill="#064E3B" />
                  <circle cx="82" cy="55" r="10" fill="#064E3B" />

                  {/* Eye highlights (cute effect) */}
                  <circle cx="51" cy="52" r="3" fill="#fff" />
                  <circle cx="85" cy="52" r="3" fill="#fff" />

                  {/* Blush */}
                  <ellipse
                    cx="45"
                    cy="72"
                    rx="8"
                    ry="5"
                    fill="#FBCFE8"
                    opacity="0.7"
                  />
                  <ellipse
                    cx="85"
                    cy="72"
                    rx="8"
                    ry="5"
                    fill="#FBCFE8"
                    opacity="0.7"
                  />

                  {/* Friendly mouth */}
                  <path
                    d="M50 80 Q65 95 80 80"
                    stroke="#064E3B"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Little leaf on its head */}
                  <path
                    d="M60 20 C58 10 72 10 70 20 C69 27 61 27 60 20"
                    fill="#34D399"
                  />
                  <path
                    d="M65 22 C70 15 78 18 76 25 C74 32 66 29 65 22"
                    fill="#059669"
                  />
                </g>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        variants={fadeUp}
        className="grid md:grid-cols-3 gap-6 items-start mt-24"
      >
        {/* Step 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-3xl shadow-lg text-center"
        >
          <div className="mx-auto w-20 h-20 mb-4">
            {/* Cute camera icon */}
            <svg
              viewBox="0 0 64 64"
              fill="currentColor"
              className="w-full h-full text-blue-500"
            >
              <path d="M22 10l3-5h14l3 5h8c3.3 0 6 2.7 6 6v30c0 3.3-2.7 6-6 6H14c-3.3 0-6-2.7-6-6V16c0-3.3 2.7-6 6-6h8zm10 36a14 14 0 100-28 14 14 0 000 28zm0-6a8 8 0 110-16 8 8 0 010 16z" />
            </svg>
          </div>
          <h4 className="font-extrabold text-lg text-blue-700">
            1. Take a Picture
          </h4>
          <p className="text-sm text-gray-600 mt-2 font-black">
            Snap something silly or upload a photo!
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-3xl shadow-lg text-center"
        >
          <div className="mx-auto w-20 h-20 mb-4">
            {/* Cute AI robot icon */}
            <svg
              viewBox="0 0 64 64"
              fill="currentColor"
              className="w-full h-full text-purple-500"
            >
              <path d="M32 6a10 10 0 0110 10v4h6a6 6 0 016 6v16a6 6 0 01-6 6H16a6 6 0 01-6-6V26a6 6 0 016-6h6v-4A10 10 0 0132 6z" />
              <circle cx="24" cy="32" r="4" fill="#fff" />
              <circle cx="40" cy="32" r="4" fill="#fff" />
            </svg>
          </div>

          <h4 className="font-extrabold text-lg text-purple-700">
            2. Magic AI Guess
          </h4>
          <p className="text-sm text-gray-600 mt-2 font-black">
            A cute robot tries to guess your item!
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white rounded-3xl shadow-lg text-center"
        >
          <div className="mx-auto w-20 h-20 mb-4">
            {/* Fun bin icon */}
            <svg
              viewBox="0 0 64 64"
              fill="currentColor"
              className="w-full h-full text-green-500"
            >
              <path d="M20 14h24l-2 40H22L20 14zm-4-6h32v4H16v-4z" />
              <circle cx="32" cy="32" r="6" fill="#fff" />
            </svg>
          </div>

          <h4 className="font-extrabold text-lg text-green-700">
            3. Pick the Bin
          </h4>
          <p className="text-sm text-gray-600 mt-2 font-black">
            Drop it in the right bin and earn fun tips!
          </p>
        </motion.div>
      </motion.section>

      {/* Recycling Bins & Challenge Section */}
      <section className="py-12 bg-gray-50 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-purple-700">
            Six Ways to be an Eco-Hero!
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            Match the item to its unique friend. Careful, some need special
            care!
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          // Adjusting grid for six items: 3 per row on medium, 6 per row on large screens
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2 lg:px-4"
        >
          {/* 1. Paper (Blue) */}
          <RecyclingBin
            color="blue"
            title="Paper Pal"
            description="Newspapers, Boxes, & Card"
            iconSvg={<PaperPalSVG />}
          />

          {/* 2. Metal (Gray/Silver) */}
          <RecyclingBin
            color="gray"
            title="Metal Machine"
            description="Food Cans & Aluminum Foil"
            iconSvg={<MetalMachineSVG />}
          />

          {/* 3. Plastic (Yellow/Orange) */}
          <RecyclingBin
            color="yellow"
            title="Plastic Protector"
            description="Bottles, Jugs, & Containers"
            iconSvg={<PlasticProtectorSVG />}
          />

          {/* 4. Organic/Compost (Brown) */}
          <RecyclingBin
            color="brown"
            title="Compost King"
            description="Food Scraps & Garden Waste"
            iconSvg={<CompostKingSVG />}
          />

          {/* 5. Glass (Green) */}
          <RecyclingBin
            color="green"
            title="Glass Guardian"
            description="Jars & Glass Bottles Only"
            iconSvg={<GlassGuardianSVG />}
          />

          {/* 6. Non-Recyclable/General Waste (Red/Black) - Named 'General' for simplicity */}
          <RecyclingBin
            color="red"
            title="Toss Timer (General)"
            description="Toys, Dirty Items, & Styrofoam"
            iconSvg={<TossTimerSVG />}
          />
        </motion.div>
      </section>
    </motion.div>
  );
};

import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function GlassHeader() {
  return (
    <header className="sticky z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-4xl mx-auto p-4 flex justify-between items-center">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["skills", "experience", "projects", "education"].map(
            (item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item === "experience" && "💼 "}
                {item === "skills" && "🛠️ "}
                {item === "projects" && "🚀 "}
                {item === "education" && "🎓 "}
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

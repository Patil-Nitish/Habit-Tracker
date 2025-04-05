import React from "react";
import { motion } from "framer-motion";
import { Trophy, Flame, BookOpen, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  { title: "Achievements", icon: <Trophy className="text-yellow-500" />, content: "Completed Google Cybersecurity Certificate" },
  { title: "Progress", icon: <Flame className="text-red-500" />, content: "Lost 10kg in 2 months, spiritual growth" },
  { title: "Knowledge Gained", icon: <BookOpen className="text-blue-500" />, content: "Explored Jungian archetypes, Vedic Astrology" },
  { title: "Reflections", icon: <User className="text-green-500" />, content: "Struggling with internal habits but moving forward" },
];

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      <h1 className="text-4xl font-bold text-center mb-6">VIRAAT.EXE</h1>
      <motion.div className="grid gap-4 md:grid-cols-2">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="bg-gray-900 border border-gray-700 rounded-2xl shadow-md p-4">
              <CardContent className="flex items-center gap-4">
                {sec.icon}
                <div>
                  <h2 className="text-xl font-semibold">{sec.title}</h2>
                  <p className="text-sm text-gray-300">{sec.content}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default App;

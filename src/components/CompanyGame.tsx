import React, { useState, useEffect } from 'react';
import { Check, X, ArrowRight, Trophy, RefreshCw, Building2, Users, CalendarDays, BriefcaseBusiness, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const companies = [
  { name: "Paper Boat", founders: "Neeraj Kakkar, Neeraj Biyani, James Nuttall, and Suhas Misra", ceo: "Neeraj Kakkar", year: 2013, info: "Consumer beverage brand making packaged traditional Indian drinks like Aam Panna, Jaljeera, Kanjhi, and traditional snack items.", blurred: "/assets/aistudio/paper_boat__blur__f123c15b.png", original: "/assets/aistudio/paper_boat_bfbb81f5.png" },
  { name: "BharatPe", founders: "Ashneer Grover and Shashvat Nakrani", ceo: "Nalin Negi", year: 2018, info: "Financial technology (FinTech) company providing QR code payment systems, POS card machines, merchant lending, and digital banking solutions for small businesses and merchants.", blurred: "/assets/aistudio/bharat_pay_42afb437.png", original: "/assets/aistudio/bharat_pay_42afb437.png" },
  { name: "Wakefit Innovations", founders: "Ankit Garg and Chaitanya Ramalingegowda", ceo: "Ankit Garg", year: 2016, info: "Home and sleep solutions company manufacturing memory foam mattresses, pillows, ergonomic chairs, beds, and home furniture.", blurred: "/assets/aistudio/wake_fit__blured__6756f3dc.png", original: "/assets/aistudio/wake_fit_1f08024f.png" },
  { name: "BoAt (Imagine Marketing Ltd.)", founders: "Aman Gupta and Sameer Mehta", ceo: "Sameer Mehta", year: 2016, info: "Consumer electronics D2C brand specializing in affordable audio hardware (earphones, headphones, soundbars) and smartwatches.", blurred: "/assets/aistudio/boAt_0561edc3.png", original: "/assets/aistudio/boAt_0561edc3.png" },
  { name: "Cure.fit (Cult.fit)", founders: "Mukesh Bansal and Ankit Nagori", ceo: "Mukesh Bansal", year: 2016, info: "Health and fitness ecosystem offering chain fitness centers/gyms (Cult), online workout training, and healthy food ordering.", blurred: "/assets/aistudio/cult.fit_4aa7c13e.png", original: "/assets/aistudio/cult.fit_4aa7c13e.png" },
  { name: "Lenskart", founders: "Peyush Bansal, Amit Chaudhary, and Sumeet Kapahi", ceo: "Peyush Bansal", year: 2010, info: "Direct-to-consumer (D2C) eyewear retailer manufacturing and selling prescription glasses, contact lenses, and sunglasses online and via thousands of physical stores.", blurred: "/assets/aistudio/lenscart_f6224df3.png", original: "/assets/aistudio/lenscart_f6224df3.png" },
  { name: "Urban Company", founders: "Abhiraj Singh Bhal, Varun Khaitan, and Raghav Chandra", ceo: "Abhiraj Singh Bhal", year: 2014, info: "On-demand home services platform providing home cleaning, beauty services, salon at home, plumbing, carpentry, and appliance repair.", blurred: "/assets/aistudio/UC__blured__c7fed914.png", original: "/assets/aistudio/UC_f50dfe77.png" },
  { name: "Honasa Consumer", founders: "Varun Alagh and Ghazal Alagh", ceo: "Varun Alagh", year: 2016, info: "Direct-to-consumer (D2C) personal care and beauty FMCG company operating toxin-free cosmetic and skincare brands including Mamaearth, The Derma Co., Aqualogica, and Ayuga.", blurred: "/assets/aistudio/honasa_64b52e39.jpeg", original: "/assets/aistudio/honasa_64b52e39.jpeg" },
  { name: "CarDekho (GirnarSoft)", founders: "Amit Jain and Anurag Jain", ceo: "Amit Jain", year: 2008, info: "Autotech search and discovery platform facilitating the buying and selling of new and used cars, auto insurance, vehicle finance, and car comparison metrics.", blurred: "/assets/aistudio/cardekho_cf4b54f8.jpeg", original: "/assets/aistudio/cardekho_cf4b54f8.jpeg" },
  { name: "Veeba (VRB Consumer Products)", founders: "Viraj Bahl and Shilpa Madan", ceo: "Viraj Bahl", year: 2013, info: "Food and condiments brand manufacturing salad dressings, mayonnaise, sauces, dips, peanut butter, and pasta toppings for retail consumers and major QSR restaurant chains.", blurred: "/assets/aistudio/veeba_d4c1cab2.jpeg", original: "/assets/aistudio/veeba_d4c1cab2.jpeg" }
];

export default function CompanyGame() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'summary'>('start');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [shuffledCompanies, setShuffledCompanies] = useState(companies);
  const [showUnblurred, setShowUnblurred] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    if (gameState === 'start') {
      setShuffledCompanies([...companies].sort(() => Math.random() - 0.5));
      setRound(0);
      setScore(0);
    }
  }, [gameState]);

  const handleAnswer = (isCorrect: boolean) => {
    if (answered) return;
    if (isCorrect) setScore(s => s + 1);
    setAnswered(true);
    setShowUnblurred(true);
    setTimeout(() => {
      setShowInfo(true);
    }, 1500);
  };

  const handleNext = () => {
    if (round < shuffledCompanies.length - 1) {
      setRound(r => r + 1);
      setShowUnblurred(false);
      setShowInfo(false);
      setAnswered(false);
    } else {
      setGameState('summary');
    }
  };

  const currentCompany = shuffledCompanies[round];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 text-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div key="start" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="text-center">
            <motion.h1 animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="text-7xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Logo Guessing Game</motion.h1>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setGameState('playing')} className="px-10 py-5 bg-teal-600 text-white rounded-full text-3xl font-bold hover:bg-teal-500 shadow-xl shadow-teal-900/50 flex items-center gap-3 mx-auto"><Play /> Start Game</motion.button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div key="playing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center w-full max-w-3xl">
            <div className="flex justify-between w-full mb-8 text-2xl font-bold bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <span>Round {round + 1} / 10</span>
              <span>Score: {score}</span>
            </div>
            
            <motion.div layout initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-white p-6 rounded-3xl mb-10 shadow-2xl shadow-indigo-900/50">
              <motion.img layout src={showUnblurred ? currentCompany.original : currentCompany.blurred} alt="Company Logo" className="w-80 h-80 object-contain rounded-2xl" />
            </motion.div>

            {!answered && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-8">
                <motion.button whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }} onClick={() => handleAnswer(true)} className="p-6 bg-green-600 rounded-full hover:bg-green-500 shadow-xl shadow-green-900/50"><Check size={64} /></motion.button>
                <motion.button whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.9 }} onClick={() => handleAnswer(false)} className="p-6 bg-red-600 rounded-full hover:bg-red-500 shadow-xl shadow-red-900/50"><X size={64} /></motion.button>
              </motion.div>
            )}

            {showInfo && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-6 w-full bg-indigo-900/80 p-8 rounded-3xl border border-indigo-700 shadow-2xl backdrop-blur-md overflow-hidden">
                <h3 className="text-4xl font-bold mb-6 text-cyan-300">{currentCompany.name}</h3>
                <div className="space-y-4 text-lg">
                  <p className="flex items-center gap-3"><Users className="text-teal-400" /> <span className="font-semibold text-gray-300">Founders:</span> {currentCompany.founders}</p>
                  <p className="flex items-center gap-3"><BriefcaseBusiness className="text-teal-400" /> <span className="font-semibold text-gray-300">CEO:</span> {currentCompany.ceo}</p>
                  <p className="flex items-center gap-3"><CalendarDays className="text-teal-400" /> <span className="font-semibold text-gray-300">Founding Year:</span> {currentCompany.year}</p>
                  <p className="flex items-start gap-3"><Building2 className="text-teal-400 mt-1" /> <span className="font-semibold text-gray-300">About:</span> {currentCompany.info}</p>
                </div>
                <motion.button whileHover={{ scale: 1.1 }} onClick={handleNext} className="mt-10 mx-auto block p-4 bg-blue-600 rounded-full hover:bg-blue-500 shadow-xl"><ArrowRight size={48} /></motion.button>
              </motion.div>
            )}
          </motion.div>
        )}

        {gameState === 'summary' && (
          <motion.div key="summary" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center bg-indigo-900/50 p-12 rounded-3xl border border-indigo-700">
            <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}><Trophy size={128} className="text-yellow-400 mx-auto mb-6" /></motion.div>
            <h1 className="text-6xl font-extrabold mb-6">Game Over!</h1>
            <p className="text-4xl mb-10 font-bold">Your Final Score: {score} / 10</p>
            <motion.button whileHover={{ scale: 1.05 }} onClick={() => setGameState('start')} className="px-10 py-4 bg-teal-600 text-white rounded-full text-2xl font-bold hover:bg-teal-500 transition flex items-center gap-3 mx-auto"><RefreshCw /> Play Again</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


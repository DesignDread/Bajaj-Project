// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const questions = [
//     {
//       question: "What is IEEE CIET?",
//       answer:
//         "IEEE CIET is a student-run organization that focuses on promoting engineering excellence and technological advancements at the College of Engineering and Technology.",
//     },
//     {
//       question: "How can I join IEEE CIET?",
//       answer:
//         "You can join IEEE CIET by filling out the membership form available on our website or contacting our team directly.",
//     },
//     {
//       question: "What kind of events do you organize?",
//       answer:
//         "We organize a variety of events such as workshops, tech talks, hackathons, and conferences focused on engineering and innovation.",
//     },
//     {
//       question: "Do you offer internship opportunities?",
//       answer:
//         "Yes, we collaborate with tech companies to offer internships and project opportunities to our members.",
//     },
//     {
//       question: "How can I get in touch with the team?",
//       answer:
//         "You can reach out to us through the contact page on our website, or you can email us directly at ieee@ciet.ac.in.",
//     },
//   ];

//   return (
//     <div className="container mx-auto p-8">
//       <div className="space-y-4">
//         {questions.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }} // delay each item slightly
//           >
//             <div
//               onClick={() => toggleAccordion(index)}
//               className="cursor-pointer p-4 bg-card rounded-lg shadow-lg dark:bg-card dark:text-card-foreground"
//             >
//               <h2 className="text-xl font-semibold">{item.question}</h2>
//             </div>

//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{
//                 height: activeIndex === index ? "auto" : 0,
//                 opacity: activeIndex === index ? 1 : 0,
//               }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden p-4 bg-muted rounded-lg shadow-md mt-2 dark:bg-muted dark:text-muted-foreground"
//             >
//               <p>{item.answer}</p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;
// `
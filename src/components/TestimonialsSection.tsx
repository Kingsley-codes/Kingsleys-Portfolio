// "use client";

// import { Card, CardContent } from "./ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./ui/carousel";
// import { motion } from "motion/react";
// import { Star, Quote } from "lucide-react";

// export function TestimonialsSection() {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Product Manager",
//       company: "TechFlow Inc.",
//       image: "professional woman executive",
//       rating: 5,
//       testimonial:
//         "Agbam delivered an exceptional e-commerce platform that exceeded our expectations. His expertise in React and Express.js helped us launch on time and under budget. The code quality is outstanding and the user experience is seamless.",
//       project: "E-Commerce Platform",
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "CTO",
//       company: "StartupVision",
//       image: "professional asian man tech",
//       rating: 5,
//       testimonial:
//         "Working with Agbam was a game-changer for our startup. He built a robust task management application using the MERN stack that scales beautifully. His attention to detail and problem-solving skills are remarkable.",
//       project: "Task Management App",
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "Marketing Director",
//       company: "ContentHub",
//       image: "professional latina woman marketing",
//       rating: 5,
//       testimonial:
//         "Agbam transformed our content management needs with a custom CMS that's both powerful and user-friendly. The Next.js implementation is lightning-fast and the admin interface is intuitive. Highly recommended!",
//       project: "Blog CMS",
//     },
//     {
//       id: 4,
//       name: "David Thompson",
//       role: "Founder",
//       company: "PropertyLink",
//       image: "professional man entrepreneur",
//       rating: 5,
//       testimonial:
//         "The real estate platform Agbam developed for us has revolutionized how we showcase properties. The map integration and search functionality are top-notch. His MongoDB expertise really shines through.",
//       project: "Real Estate Platform",
//     },
//     {
//       id: 5,
//       name: "Lisa Park",
//       role: "Operations Manager",
//       company: "WeatherTech Solutions",
//       image: "professional woman manager",
//       rating: 5,
//       testimonial:
//         "Agbam's weather dashboard application is exactly what we needed for our operations team. The real-time data visualization and responsive design work perfectly across all devices. Great communication throughout the project.",
//       project: "Weather Dashboard",
//     },
//     {
//       id: 6,
//       name: "James Wilson",
//       role: "Tech Lead",
//       company: "SocialConnect",
//       image: "professional man developer",
//       rating: 5,
//       testimonial:
//         "The social media API Agbam built is robust, scalable, and well-documented. His Express.js and MongoDB implementation handles our growing user base effortlessly. Professional and reliable developer.",
//       project: "Social Media API",
//     },
//   ];

//   const stats = [
//     { number: "25+", label: "Happy Clients" },
//     { number: "50+", label: "Projects Completed" },
//     { number: "99%", label: "Client Satisfaction" },
//     { number: "3+", label: "Years Experience" },
//   ];

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <Star
//         key={i}
//         className={`w-4 h-4 ${
//           i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
//         }`}
//       />
//     ));
//   };

//   const TestimonialCard = ({
//     testimonial,
//     index,
//   }: {
//     testimonial: (typeof testimonials)[0];
//     index: number;
//   }) => (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className="h-full"
//     >
//       <Card className="h-full hover:shadow-lg transition-shadow relative">
//         <CardContent className="p-6 flex flex-col h-full">
//           <div className="flex items-center mb-4">
//             <div className="flex">{renderStars(testimonial.rating)}</div>
//             <Badge variant="secondary" className="ml-auto">
//               {testimonial.project}
//             </Badge>
//           </div>

//           <Quote className="w-8 h-8 text-primary/20 mb-4" />

//           <blockquote className="text-muted-foreground mb-6 flex-grow italic">
//             &quot;{testimonial.testimonial}&quot;
//           </blockquote>

//           <div className="flex items-center mt-auto">
//             <Avatar className="w-12 h-12 mr-4">
//               <AvatarImage
//                 src={`https://images.unsplash.com/featured/?${testimonial.image}&w=100&h=100&fit=crop&crop=face`}
//                 alt={testimonial.name}
//               />
//               <AvatarFallback>
//                 {testimonial.name
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")}
//               </AvatarFallback>
//             </Avatar>
//             <div>
//               <div className="text-sm">{testimonial.name}</div>
//               <div className="text-xs text-muted-foreground">
//                 {testimonial.role} at {testimonial.company}
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );

//   return (
//     <section id="testimonials" className="py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
//             Client <span className="text-primary">Testimonials</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Don&apos;t just take my word for it. Here&apos;s what clients say
//             about working with me and the results we&apos;ve achieved together.
//           </p>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <div className="text-3xl lg:text-4xl text-primary mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-muted-foreground">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Mobile Carousel (visible on sm and below) */}
//         <div className="block md:hidden mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <Carousel className="w-full max-w-sm mx-auto">
//               <CarouselContent>
//                 {testimonials.map((testimonial, index) => (
//                   <CarouselItem key={testimonial.id} className="pl-4">
//                     <TestimonialCard testimonial={testimonial} index={index} />
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <CarouselPrevious className="left-0" />
//               <CarouselNext className="right-0" />
//             </Carousel>

//             {/* Carousel Indicators */}
//             <div className="flex justify-center mt-6 space-x-2">
//               {testimonials.map((_, index) => (
//                 <div
//                   key={index}
//                   className="w-2 h-2 rounded-full bg-muted-foreground/30"
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Desktop Grid (hidden on mobile) */}
//         <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard
//               key={testimonial.id}
//               testimonial={testimonial}
//               index={index}
//             />
//           ))}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-accent/20">
//             <CardContent className="p-0">
//               <h3 className="text-2xl mb-4">Ready to Work Together?</h3>
//               <p className="text-muted-foreground mb-6 max-w-md">
//                 Join these satisfied clients and let&apos;s build something
//                 amazing together. I&apos;m committed to delivering exceptional
//                 results on every project.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   onClick={() =>
//                     document
//                       .querySelector("#contact")
//                       ?.scrollIntoView({ behavior: "smooth" })
//                   }
//                   className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
//                 >
//                   Start Your Project
//                 </button>
//                 <button
//                   onClick={() =>
//                     document
//                       .querySelector("#projects")
//                       ?.scrollIntoView({ behavior: "smooth" })
//                   }
//                   className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
//                 >
//                   View My Work
//                 </button>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

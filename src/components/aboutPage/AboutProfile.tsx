interface AboutProfileProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

export default function AboutProfile({
  name = "Agbam Kingsley Emeka",
  title = "Architecting the Modern Web",
  description = "Full-stack web developer specializing in high-performance applications with React, Next.js, and Node.js. I transform complex problems into elegant, scalable digital experiences.",
  imageUrl = "https://res.cloudinary.com/dbeyl29fl/image/upload/v1769604748/k5yzbaza1zee88mgquab.jpg",
}: AboutProfileProps) {
  return (
    <section className="flex flex-col items-center text-center px-4 sm:px-6 mt-16 sm:mt-20 mb-20 sm:mb-24">
      {/* Avatar */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-700" />
        <div
          className="relative bg-center bg-no-repeat bg-cover rounded-full 
                     h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40
                     border-2 border-primary/50"
          style={{ backgroundImage: `url("${imageUrl}")` }}
          aria-label="Professional headshot of Agbam Kingsley Emeka smiling"
        />
      </div>

      {/* Name */}
      <h1
        className="mt-6 sm:mt-8 text-3xl md:pb-3 sm:text-4xl md:text-6xl font-bold tracking-tight
                     bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
      >
        {name}
      </h1>

      {/* Title */}
      <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-primary font-medium">
        {title}
      </p>

      {/* Description */}
      <p
        className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg 
                    text-slate-400 max-w-prose leading-relaxed"
      >
        {description}
      </p>
    </section>
  );
}

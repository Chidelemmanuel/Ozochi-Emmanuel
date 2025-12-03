This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




export default function AboutMe() {
  return (
    <section className="w-full bg-[#242121] text-white py-16 px-6 lg:px-20">
      <h2 className="text-center text-3xl font-bold mb-12 relative">
        About Me
        <span className="block w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-20 max-w-6xl mx-auto">

        {/* LEFT SIDE — REPLACING IMAGE WITH TEXT BLOCK */}
        <div className="bg-[#11121b] rounded-xl p-6 lg:p-10 shadow-lg border border-white max-w-xl">
          <h3 className="text-2xl font-bold mb-4"> Developer Profile </h3>

          <p className="text-gray-300 leading-relaxed text-[15px] lg:text-base">
            I am a frontend engineer with a solid grasp of HTML, CSS, JavaScript (ES6+), 
            and React. I enjoy building clean, responsive, and user-friendly interfaces. 
            I focus on writing maintainable code, improving performance, and staying current 
            with modern frontend trends. I am excited to contribute to teams that value 
            great design and thoughtful development.
          </p>
        </div>

        {/* RIGHT SIDE — SKILLS SECTION */}
        <div className="flex flex-col max-w-xl">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">Passionate Frontend Developer</h3>

          <p className="text-gray-400 leading-relaxed mb-8 text-[15px] lg:text-base">
            I specialize in frontend technologies and modern UI development. 
            My focus is always on accessibility, performance, and delivering 
            clean, intuitive user experiences.
          </p>

          <h4 className="text-lg font-semibold mb-4">My Skills</h4>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Next.Js",
              "React.Js",
              "TypeScript",
              "JavaScript (ES6+)",
              "RESTful API",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "UI/UX Design",
              "Responsive Design",
              "Performance",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-transparent text-gray-300 px-4 py-2 rounded-lg text-sm border-3 border-red-500 text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
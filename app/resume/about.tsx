"use client";
import { TabsContent } from "@/components/ui/tabs";

const about = {
  title: "About Me",
  description:
    "My journey in web development began in 2023. Since then, I’ve been consistently honing my skills and expanding my understanding of modern web technologies. Over time, I’ve grown from building simple interfaces to developing more structured, responsive, and dynamic web applications. I’m deeply passionate about technology and see coding not just as a skill, but as a craft that I continuously refine. This passion drives me to keep learning, improving, and striving to become a reliable and impactful web developer.",
  info: [
    {
      fieldNama: "Name",
      fieldValue: "Renny Melanda Febriyanti",
    },
    {
      fieldNama: "Phone",
      fieldValue: "081528990979",
    },
    {
      fieldNama: "Experience",
      fieldValue: "+ 2 Years Journey as a Software Developer",
    },
    {
      fieldNama: "Email",
      fieldValue: "rennymelandaf@gmial.com",
    },
    {
      fieldNama: "Nationality",
      fieldValue: "Indonesia",
    },
  ],
};
const AboutTabsContent = () => {
  return (
    <TabsContent className=" w-full text-center xl:text-left "  value="about">
      <div className="flex flex-col gap-[30px] min-h-[650px]">
        <h3 className="text-4xl font-extrabold text-accent drop-shadow-lg">{about.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {about.description}
        </p>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
          {about.info.map((item, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-center xl:justify-start gap-4"
              >
                <span className="text-white/60">{item.fieldNama}</span>
                <span className="text-xl">{item.fieldValue}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </TabsContent>
  );
};

export default AboutTabsContent;

import { ReactNode } from "react";

interface ExperienceCardProps {
  children: ReactNode;
}

export const ExperienceCard = ({ children }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col w-full min-w-[300px] lg:w-[70%] xl:w-[55%] pt-4 px-4 pb-7 lg:pt-8 lg:px-8 lg:pb-14 rounded-md bg-[#162239] font-montserrat">
      {children}
    </div>
  );
};

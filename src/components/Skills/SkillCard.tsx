export interface SkillCardTypes {
  id: number;
  title: string;
  subtitle?: string;
  items: string[];
  backgroundColorHex: string; //#123456
}

interface SkillCardProps {
  data: SkillCardTypes;
}

export const SkillCard = ({
  data: { title, subtitle, items, backgroundColorHex },
}: SkillCardProps) => {
  return (
    <div
      className={`min-w-[250px] w-[250[px] min-h-[350px] lg:min-w-[300px] lg:w-[300[px] lg:min-h-[450px] bg-[${backgroundColorHex}] border-black border-4 rounded-lg p-4`}
    >
      <h3 className="text-3xl lg:text-4xl font-unbounded flex flex-col">
        {title}
        {subtitle ? (
          <span className="inline-block text-xs lg:text-sm">{subtitle}</span>
        ) : null}
      </h3>
      <ul className="mt-4 lg:mt-6 flex flex-col gap-3 font-unbounded text-lg lg:text-xl">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export interface SkillCardTypes {
  id: number;
  title: string;
  subtitle?: string;
  items: string[];
  backgroundColorHex: string; //#123456
}

interface SkillCardProps {
  data: SkillCardTypes;
  index: number;
}

export const SkillCard = ({
  data: { title, subtitle, items, backgroundColorHex },
  index,
}: SkillCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`min-w-[200px] w-[200px] h-[350px] md:min-w-[250px] md:w-[250[px] md:min-h-[400px] lg:min-w-[300px] lg:w-[300[px] lg:min-h-[450px] p-3 lg:p-4 border-black border-[3px] rounded-lg`}
      style={{
        backgroundColor: backgroundColorHex,
        transform: `translate(${isEven ? 0 - 14 : 14}px, 0px) rotate(${
          isEven ? 8 : 0 - 8
        }deg)`,
        zIndex: index,
      }}
    >
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-unbounded flex flex-col">
        {title}
        {subtitle ? (
          <span className="inline-block text-xs lg:text-sm">{subtitle}</span>
        ) : null}
      </h3>
      <ul className="mt-4 md:mt-5 lg:mt-6 flex flex-col gap-3 font-unbounded text-md md:text-lg lg:text-xl">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

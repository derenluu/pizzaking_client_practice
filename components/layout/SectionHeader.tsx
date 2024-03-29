import { SectionHeaderType } from "@/types";

const SectionHeader = ({ subHeader, mainHeader }: SectionHeaderType) => {
  return (
    <>
      <h3 className="uppercase text-gray-600 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </>
  );
};

export default SectionHeader;

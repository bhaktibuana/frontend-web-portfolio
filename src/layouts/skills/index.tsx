import React, { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { colorPalette } from "../../constants/colorPalette";
import useGet from "../../hooks/useGet";
import SectionTitle from "../../components/sectionTitle";
import SkillCard from "../../components/skillCard";
import { Section, SkillsContainer } from "./style";

interface ComponentPropsIface {
  id: string;
}

interface SkillListIface {
  id: string;
  title: string;
  image_path: string;
  source_link: string;
  order: number;
}

const SkillsLayout = ({ id }: ComponentPropsIface) => {
  const [skillList, setSkillList] = useState<any>([]);

  const getSkills = useGet("skillsData", "/skills");

  useEffect(() => {
    if (!getSkills.isLoading) setSkillList(getSkills.data.payload);
  }, [getSkills]);

  return (
    <>
      <Section id={id} color={colorPalette}>
        <SectionTitle
          icon={<FaLaptopCode size={40} />}
          titleText="Skills & Abilities"
          isBgDark={false}
        />

        <SkillsContainer>
          {getSkills.isLoading
            ? null
            : skillList.map(
                (item: SkillListIface, index: number) => (
                  <SkillCard
                    key={index}
                    title={item.title}
                    src={item.source_link}
                    imgSrc={item.image_path}
                  />
                )
              )}
        </SkillsContainer>
      </Section>
    </>
  );
};

export default SkillsLayout;

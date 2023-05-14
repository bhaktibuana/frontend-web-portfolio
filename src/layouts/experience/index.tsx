import React, { useState, useEffect } from "react";
import { FaBusinessTime } from "react-icons/fa";
import useGet from "../../hooks/useGet";
import { colorPalette } from "../../constants/colorPalette";
import SectionTitle from "../../components/sectionTitle";
import Timeline from "../../components/timeline";
import { ExperienceContainer, Section, TimelineContainer } from "./style";

interface ComponentProps {
  id: string;
}

interface timelineDataIface {
  id: string;
  company: string;
  job_title: string;
  start_date: string;
  end_date: string | null;
  present: boolean;
  job_type: string;
  description: string;
}

const ExperienceLayout = ({ id }: ComponentProps) => {
  const [experienceList, setExperienceList] = useState<
    Array<timelineDataIface>
  >([]);

  const getExperience = useGet("experienceData", "/experience");

  useEffect(() => {
    if (!getExperience.isLoading) setExperienceList(getExperience.data.payload);
  }, [getExperience]);
  return (
    <>
      <Section id={id} color={colorPalette}>
        <SectionTitle
          icon={<FaBusinessTime size={40} />}
          titleText="Experience"
          isBgDark={true}
        />

        <ExperienceContainer>
          <TimelineContainer color={colorPalette}>
            {!getExperience.isLoading &&
              experienceList.map((item: timelineDataIface, index: number) => (
                <Timeline key={index} timelineData={item} index={index} />
              ))}
          </TimelineContainer>
        </ExperienceContainer>
      </Section>
    </>
  );
};

export default ExperienceLayout;

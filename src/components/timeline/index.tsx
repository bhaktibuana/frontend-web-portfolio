import React, { useState } from "react";
import moment from "moment";
import { IoBriefcase } from "react-icons/io5";
import { colorPalette } from "../../constants/colorPalette";
import {
  Container,
  IconContainer,
  TextBox,
  ContainerArrow,
  CompanyName,
  JobTitle,
  JobPeriod,
  JobDesc,
} from "./style";

interface ComponentProps {
  timelineData: timelineDataIface;
  index: number;
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

const Timeline = ({ timelineData, index }: ComponentProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const genereatePosition = (index: number): string => {
    if (index % 2 === 0) return "left";
    return "right";
  };

  const dateFormat = (
    value: string | null,
    present: boolean = false
  ): string => {
    if (present) return "Present";
    return moment(value, "YYYY-MM-DD").format("MMMM YYYY").toString();
  };

  return (
    <>
      <Container position={genereatePosition(index)} key={index}>
        <IconContainer
          position={genereatePosition(index)}
          color={colorPalette}
          isHover={isHover}
        >
          <IoBriefcase size={22} />
        </IconContainer>

        <TextBox
          color={colorPalette}
          position={genereatePosition(index)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <CompanyName color={colorPalette}>{timelineData.company}</CompanyName>

          <JobTitle color={colorPalette}>
            {timelineData.job_title} • {timelineData.job_type}
          </JobTitle>

          <JobPeriod color={colorPalette}>
            {dateFormat(timelineData.start_date)} -{" "}
            {dateFormat(timelineData.end_date, timelineData.present)}
          </JobPeriod>

          <JobDesc color={colorPalette}>{timelineData.description}</JobDesc>

          <ContainerArrow
            color={colorPalette}
            position={genereatePosition(index)}
          ></ContainerArrow>
        </TextBox>
      </Container>
    </>
  );
};

export default Timeline;

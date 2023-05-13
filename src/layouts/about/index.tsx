import React, { useState, useEffect } from "react";
import { colorPalette } from "../../constants/colorPalette";
import SectionTitle from "../../components/sectionTitle";
import { FaUser } from "react-icons/fa";
import useGet from "../../hooks/useGet";
import ProfileImageCard from "../../components/profileImageCard";
import { IoIosMail, IoIosPin } from "react-icons/io";
import {
  Section,
  AboutContainer,
  PhotoContent,
  InfoContent,
  InfoTitle,
  InfoSubtitle,
  InfoDescription,
  ContactContainer,
  ContactIcon,
  ContactInfo,
} from "./style";
import DownloadResumeButton from "../../components/buttons/downloadResumeButton";

interface ComponentProps {
  id: string;
}

const AboutLayout = ({ id }: ComponentProps) => {
  const [profileImageData, setProfileImageData] = useState<any>({});
  const [aboutData, setAboutData] = useState<any>({});
  const [resumeData, setResumeData] = useState<any>({});

  const getProrfileImage = useGet(
    "profileImageData",
    "/profileImage/getActiveData"
  );

  const getAbout = useGet("aboutData", "/about");

  const getResume = useGet("resumeData", "/resume");

  useEffect(() => {
    if (!getProrfileImage.isLoading)
      setProfileImageData(getProrfileImage.data.payload);

    if (!getAbout.isLoading) setAboutData(getAbout.data.payload);

    if (!getResume.isLoading) setResumeData(getResume.data.payload);
  }, [getProrfileImage, getAbout, getResume]);

  return (
    <>
      <Section id={id} color={colorPalette}>
        <SectionTitle
          icon={<FaUser size={40} />}
          titleText="About Me"
          isBgDark={false}
        />

        <AboutContainer>
          <PhotoContent>
            {getProrfileImage.isLoading ? null : (
              <ProfileImageCard src={profileImageData.image_path} />
            )}
          </PhotoContent>

          <InfoContent>
            <InfoTitle color={colorPalette}>I'm Bhakti</InfoTitle>
            <InfoSubtitle color={colorPalette}>
              Full-Stack Developer
            </InfoSubtitle>

            {getAbout.isLoading ? null : (
              <InfoDescription color={colorPalette}>
                {aboutData.description}
              </InfoDescription>
            )}

            <ContactContainer>
              <ContactIcon color={colorPalette}>
                <IoIosMail size={20} />
              </ContactIcon>

              <ContactInfo color={colorPalette}>
                bhaktibuana19@gmail.com
              </ContactInfo>
            </ContactContainer>

            <ContactContainer>
              <ContactIcon color={colorPalette}>
                <IoIosPin size={20} />
              </ContactIcon>

              <ContactInfo color={colorPalette}>
                Nganjuk - East Java, Indonesia
              </ContactInfo>
            </ContactContainer>

            <DownloadResumeButton
              url={getResume.isLoading ? "" : resumeData.file_path}
            />
          </InfoContent>
        </AboutContainer>
      </Section>
    </>
  );
};

export default AboutLayout;

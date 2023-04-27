import React, { ReactElement, useEffect, useState } from "react";
import { colorPalette } from "../../constants/colorPalette";
import {
  Container,
  IconContainer,
  TitleContainer,
  TitleText,
  FirstTitle,
  SeconTitle,
} from "./style";

interface ComponentPropsIface {
  icon: ReactElement;
  titleText: string;
  isBgDark: boolean;
}

const SectionTitle = ({ icon, titleText, isBgDark }: ComponentPropsIface) => {
  const [title, setTitle] = useState(<></>);

  const handleSetTitle = (text: string) => {
    const textArr = text.split(" ");

    if (textArr.length > 1) {
      const secondTitle = textArr.at(-1);
      const firstTitle =
        textArr.filter((item) => item !== secondTitle).join(" ") + " ";

      setTitle(
        <TitleContainer>
          <TitleText>
            <FirstTitle isBgDark={isBgDark} color={colorPalette}>
              {firstTitle}
            </FirstTitle>
            <SeconTitle color={colorPalette}>{secondTitle}</SeconTitle>
          </TitleText>
        </TitleContainer>
      );
    } else {
      const firstTitle = textArr.join(" ");

      setTitle(
        <TitleContainer>
          <TitleText>
            <FirstTitle isBgDark={isBgDark} color={colorPalette}>
              {firstTitle}
            </FirstTitle>
          </TitleText>
        </TitleContainer>
      );
    }
  };

  useEffect(() => {
    handleSetTitle(titleText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleText]);

  return (
    <>
      <Container>
        <IconContainer isBgDark={isBgDark} color={colorPalette}>
          {icon}
        </IconContainer>
        {title}
      </Container>
    </>
  );
};

export default SectionTitle;

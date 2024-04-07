import styled from "styled-components";
import { ImageProps } from "../image.types";
import { Flex } from "@app/View";
import "./imageOverlay.styles.css";
import { cx } from "@utils/cx";
import { color, spacing } from "@shared/styles";
import UpdateImageComponent from "./updateImageComponent";
import { H4 } from "@texts/index";
import { Text } from "@texts/Text/Text";
import { LMAsset } from "@utils/LumiaAssetManager";
import { LmInfo } from "@icons/lmInfo";
import { hexToRGBA } from "@utils/hexToRgba";

const ImageOverlayComponent: React.FC<ImageProps> = ({ ...props }) => {
  const {
    overlayOpacity = 0.35,
    overlay = true,
    canUpdate = false,
    borderRadius = spacing.borderRadius.small,
  } = props;

  // Ensure overlayOpacity is within the valid range of 0 to 1
  const validOverlayOpacity = Math.max(0, Math.min(1, overlayOpacity));
  if (overlayOpacity < 0 || overlayOpacity > 1) {
    throw new Error("overlayOpacity must be a number between 0 and 1.");
  }

  const ImageOverlayContainer = styled(Flex)`
    display: none;
    ${() => {
      if (overlay || canUpdate) {
        return `display: flex`;
      }
    }};
    background-color: ${hexToRGBA(color.foreground, validOverlayOpacity)};
    border-radius: ${borderRadius}vh;
    margin: ${spacing.padding.medium};
  `;

  return (
    <ImageOverlayContainer className={cx("lmImageOverlayContainer")}>
      <UpdateImageComponent {...props} />
      {props?.title != undefined && (
        <H4
          color={color.foregroundInverse}
          numberOfLines={props?.numberOfLinesForTitle || 2}
        >
          {props?.title}
        </H4>
      )}
      <Flex className={cx("lmImageDescriptionSection")}>
        {props?.description != undefined && (
          <Text
            color={color.foregroundInverse}
            type="body"
            numberOfLines={props?.numberOfLinesForDescription || 3}
          >
            {props?.description}
          </Text>
        )}
        <LMAsset Asset={LmInfo} size={2} color={color?.foregroundInverse} />
      </Flex>
    </ImageOverlayContainer>
  );
};

export default ImageOverlayComponent;
import React, { forwardRef } from "react";
import { cx } from "../../utils";
import { typography } from "../../shared/styles";
import styled from "styled-components";
import "../texts.styles.css";
import { HeaderProps } from "@texts/text.types";

const H4Component: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  HeaderProps
> = (
  { children, type = "serif", numberOfLines = 0, editable = false, ...props },
  ref
) => {
  const StyleH4 = styled.h4`
    font-family: ${type === "serif"
      ? typography.type.title
      : typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.m2};
    color: ${props?.color};
    ${numberOfLines !== 0 &&
    `
      -webkit-line-clamp: ${numberOfLines};
      line-clamp: ${numberOfLines};
    `}
  `;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLHeadingElement>) => {
    // Prevent line breaks on Enter key
    if (event.key === "Enter") {
      event.preventDefault();
    }
    const value = (event.target as HTMLHeadingElement).textContent;
    console.log("Value:", value);
  };

  return (
    <StyleH4
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={cx("lmTextComponent", props.className)}
      contentEditable={editable}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </StyleH4>
  );
};

export const H4 = forwardRef(H4Component);

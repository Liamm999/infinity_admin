import styled, { css } from 'styled-components';

export const AppText = styled.p<{
  $color?: string;
  $fontSize?: number | string;
  $lineHeight?: number | string;
  $fontWeight?: number;
  $letterSpacing?: number;
  $fontStyle?: 'italic' | 'normal' | 'oblique' | 'initial';
}>`
  margin: 0;
  color: ${p => p.theme.colors.neutral800};
  font-family: 'Hammersmith One', sans-serif;
  ${p =>
    p?.$color &&
    css`
      color: ${p.$color};
    `};
  ${({ $fontSize }) =>
    $fontSize &&
    css`
      font-size: ${typeof $fontSize === 'number'
        ? `${$fontSize}px`
        : $fontSize};
    `};
  ${({ $lineHeight }) =>
    $lineHeight &&
    css`
      line-height: ${typeof $lineHeight === 'number'
        ? `${$lineHeight}px`
        : $lineHeight};
    `};
  ${p =>
    p?.$fontWeight &&
    css`
      font-weight: ${p.$fontWeight};
    `};
  ${p =>
    p?.$letterSpacing &&
    css`
      letter-spacing: ${p.$letterSpacing}px;
    `};
  ${p =>
    p?.$fontStyle &&
    css`
      font-style: ${p.$fontStyle};
    `};
`;

export const AppH3 = styled.h3<{
  $color?: string;
  $letterSpacing?: number;
  $fontStyle?: 'italic' | 'normal' | 'oblique' | 'initial';
}>`
  font-family: 'Hammersmith One', sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 26.4px;
  color: ${p => p.theme.colors.neutral900};
  ${p =>
    p?.$color &&
    css`
      color: ${p.$color};
    `}
  ${p =>
    p?.$letterSpacing &&
    css`
      letter-spacing: ${p.$letterSpacing}px;
    `};
  ${p =>
    p?.$fontStyle &&
    css`
      font-style: ${p.$fontStyle};
    `};
`;

export const AppTextBodyRegular = styled.p<{
  $color?: string;
  $letterSpacing?: number;
  $fontStyle?: 'italic' | 'normal' | 'oblique' | 'initial';
}>`
  font-family: 'Hammersmith One', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 22.4px;
  color: ${p => p.theme.colors.neutral800};
  ${p =>
    p?.$color &&
    css`
      color: ${p.$color};
    `}
  ${p =>
    p?.$letterSpacing &&
    css`
      letter-spacing: ${p.$letterSpacing}px;
    `};
  ${p =>
    p?.$fontStyle &&
    css`
      font-style: ${p.$fontStyle};
    `};
`;

export const AppTextBodyMedium = styled.h4<{
  $color?: string;
  $letterSpacing?: number;
  $fontStyle?: 'italic' | 'normal' | 'oblique' | 'initial';
  required?: boolean;
}>`
  font-family: 'Hammersmith One', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 22.4px;
  color: ${p => p.theme.colors.neutral800};
  ${p =>
    p?.$color &&
    css`
      color: ${p.$color};
    `}
  ${p =>
    p?.$letterSpacing &&
    css`
      letter-spacing: ${p.$letterSpacing}px;
    `};
  ${p =>
    p?.$fontStyle &&
    css`
      font-style: ${p.$fontStyle};
    `};
  position: relative;
  &::after {
    content: '*';
    color: ${p => (p.required ? p.theme.colors.redErr : 'transparent')};
    position: absolute;
    top: 0;
    margin-left: 4px;
  }
`;

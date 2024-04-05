import React, { useState } from 'react';
import cn from 'classnames';
import styled, { css } from 'styled-components';
import { IMAGES } from '@assets';

interface IProps {
  width?: number;
  height?: number;
  size?: number;
  src?: string;
  alt?: string;
  containerClassName?: string;
  imgClassName?: string;
  containerStyles?: React.CSSProperties;
  imgStyles?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: (
    currentTarget: React.SyntheticEvent<HTMLImageElement, Event>
  ) => void;
  showError?: boolean;
}

export const AppImage: React.FC<IProps> = props => {
  const {
    width,
    height,
    size,
    src,
    alt,
    containerClassName,
    imgClassName,
    onClick,
    containerStyles,
    imgStyles,
    onLoad,
    showError = true
  } = props;

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <Container
      $height={height}
      $width={width}
      $size={size}
      className={cn('app-image-container', containerClassName)}
      onClick={onClick}
      style={containerStyles}
    >
      <img
        className={cn(
          'app-image smooth-image',
          imageLoaded ? 'dh-image' : 'image-hidden',
          imgClassName
        )}
        src={!isError ? src ?? IMAGES.defaultImage : IMAGES.errorImage}
        alt={alt ?? 'no_image'}
        onLoad={currentTarget => {
          onLoad && onLoad(currentTarget);
          setImageLoaded(true);
        }}
        onError={() => {
          showError && setIsError(true);
        }}
        style={imgStyles}
      />
      {!imageLoaded && <Skeleton className="pre-loader" />}
    </Container>
  );
};

const Container = styled.div<{
  $width?: number;
  $height?: number;
  $size?: number;
}>`
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  height: 100%;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `};

  ${({ $size, $height, $width }) =>
    ($size ?? ($height && $width)) &&
    css`
      width: ${$size ?? $width}px;
      height: ${$size ?? $height}px;
    `}
  & > .app-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  & > .smooth-image {
    transition: opacity 1s;
  }

  & > .dh-image {
    opacity: 1;
  }

  & > .image-hidden {
    opacity: 0;
  }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  background-image: linear-gradient(
    110deg,
    #ececec 8%,
    #f5f5f5 18%,
    #ececec 33%
  );
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

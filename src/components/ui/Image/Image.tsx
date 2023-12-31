import classNames from 'classnames';
import NextImage from 'next/image';
import { useMemo } from 'react';

import styles from './Image.styles';

export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  hasShadow?: boolean;
  className?: string;
  onClick?: () => void;
  isHidden?: boolean;
}

export const Image: React.FC<IImage> = ({
  src,
  alt,
  width,
  height,
  caption,
  className,
  hasShadow = true,
  onClick,
  isHidden = false,
}) => {
  const imageProps = useMemo(() => {
    return {
      width,
      height,
    };
  }, [width, height]);

  return (
    <figure
      className={classNames(styles.FigureCSS, {
        'shadow-lg': hasShadow,
        hidden: isHidden,
      })}
      onClick={onClick}
    >
      <NextImage
        className={classNames(styles.NextImageCSS, className)}
        src={src}
        alt={alt}
        {...imageProps}
      />
      {caption && (
        <figcaption className={styles.FigCaptionCSS}>{caption}</figcaption>
      )}
    </figure>
  );
};

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
}

export const Image: React.FC<IImage> = ({
  src,
  alt,
  width,
  height,
  caption,
  className,
  hasShadow = true,
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
      })}
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

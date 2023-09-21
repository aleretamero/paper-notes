import * as Styled from './styles';
import { ComponentPropsWithRef } from 'react';

interface IImageProps
  extends Omit<ComponentPropsWithRef<'img'>, 'width'>,
    Styled.IContainerProps {
  src: string;
  alt: string;
}

export const Image = ({
  src,
  alt,
  width,
  maxwidth,
  aspectRatio,
  ...props
}: IImageProps) => {
  return (
    <Styled.Container
      width={width}
      maxwidth={maxwidth}
      aspectRatio={aspectRatio}
    >
      <Styled.Image src={src} alt={alt} {...props} />
    </Styled.Container>
  );
};

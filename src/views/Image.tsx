import { styled } from '@mui/material';
import NextImage from 'next/image';

export const Image = styled(NextImage)({
  objectFit: 'cover', // 'contain',
  objectPosition: '0 0',
  position: 'relative',
  height: 'auto !important',
  width: '100% !important',
  maxWidth: '600px',
  marginBottom: '1rem',
});
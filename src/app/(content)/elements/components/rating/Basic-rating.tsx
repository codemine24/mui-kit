import React from 'react';
import { Rating as MuiRating } from '@mui/material';
import { RatingProps as MuiRatingProps } from '@mui/material';

export const BasicRatingPreview: React.FC<MuiRatingProps> = ({
  value,
  onChange,
  readOnly = false,
  size = 'medium',
  ...rest
}) => {
  return (
    <MuiRating
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      size={size}
      {...rest}
    />
  );
};
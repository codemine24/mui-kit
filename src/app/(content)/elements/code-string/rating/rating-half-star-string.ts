export const ratingHalfStarString = `import React from 'react';
import { Rating as MuiRating, RatingProps as MuiRatingProps } from '@mui/material';

export interface RatingProps extends MuiRatingProps {
  precision?: number; 
}

export const RatingHalfStarPreview: React.FC<RatingProps> = ({
  value,
  onChange,
  readOnly = false,
  size = 'medium',
  precision = 0.5, // Default to half-star steps
  ...rest
}) => {
  return (
    <MuiRating
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      size={size}
      precision={precision}
      {...rest}
    />
  );
};`;

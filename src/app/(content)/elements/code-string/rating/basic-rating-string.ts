export const BasicRatingString = `

import React from 'react';
import { Rating as MuiRating, RatingProps as MuiRatingProps } from '@mui/material';

export interface RatingProps extends MuiRatingProps {}

const Rating: React.FC<RatingProps> = ({
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

export default Rating;

`;

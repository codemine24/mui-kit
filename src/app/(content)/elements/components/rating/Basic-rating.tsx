import React from 'react';
import { Rating as MuiRating } from '@mui/material';
import { RatingProps as MuiRatingProps } from '@mui/material';

export interface RatingProps extends MuiRatingProps {}

const BasicRating: React.FC<RatingProps> = ({
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

export default BasicRating;

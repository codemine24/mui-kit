import React from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Rating as MuiRating, RatingProps as MuiRatingProps } from '@mui/material';

export interface RatingProps extends MuiRatingProps {}

const HeartIcon: React.FC<RatingProps> = ({
  value,
  onChange,
  ...rest
}) => {
  return (
    <MuiRating
      icon={<Favorite color="error" />}
      emptyIcon={<FavoriteBorder />}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default HeartIcon;

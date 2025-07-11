import React, { useState } from 'react';
import { Rating as MuiRating, } from '@mui/material';

const labels: { [index: number]: string } = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent',
};

export const RatingHoverPreview: React.FC = () => {
  const [value, setValue] = useState<number | null>(3);
  const [hover, setHover] = useState(-1);

  return (
    <div>
      <MuiRating
        value={value}
        precision={1}
        onChange={(event, newValue) => setValue(newValue)}
        onChangeActive={(event, newHover) => setHover(newHover)}
      />
        <span style={{ textAlign : 'center', display: 'block'}} >{labels[hover !== -1 ? hover : value || 0]}</span>
    </div>
  );
};

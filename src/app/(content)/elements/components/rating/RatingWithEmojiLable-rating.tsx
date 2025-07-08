import React, { useState } from 'react';
import { Rating, Box, Typography } from '@mui/material';

const labels: Record<number, string> = {
  1: 'Terrible 😡',
  2: 'Bad 😞',
  3: 'Okay 😐',
  4: 'Good 😊',
  5: 'Excellent 🤩',
};

const RatingWithEmojiLabel: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Rate your experience
      </Typography>
      <Rating
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />
      {rating && (
        <Typography sx={{ mt: 1 }} color="text.secondary">
          {labels[rating]}
        </Typography>
      )}
    </Box>
  );
};

export default RatingWithEmojiLabel;

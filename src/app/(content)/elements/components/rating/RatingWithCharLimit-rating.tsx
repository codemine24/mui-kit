import React, { useState } from 'react';
import { Rating, TextField, Typography, Box } from '@mui/material';

const RatingWithCharLimit: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [text, setText] = useState('');

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Share your thoughts
      </Typography>
      <Rating
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />
      {rating && (
        <TextField
          label="Your feedback"
          fullWidth
          multiline
          rows={3}
          inputProps={{ maxLength: 300 }}
          helperText={`${text.length}/300 characters`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{ mt: 2 }}
        />
      )}
    </Box>
  );
};

export default RatingWithCharLimit;

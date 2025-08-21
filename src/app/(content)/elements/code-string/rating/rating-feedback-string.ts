export const ratingFeedbackString = `import React, { useState } from 'react';
import { Rating as MuiRating, TextField, Box, Typography, Button } from '@mui/material';

export const RatingFeedbackPreview: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Feedback:', text);
    setText('')
  };
  
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        How was your experience?
      </Typography>

      <MuiRating
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        size="large"
      />

      {rating && (
        <Box mt={2}>
          <TextField
            label="Say something..."
            multiline
            fullWidth
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSubmit}
            disabled={!text.trim()}
          >
            Submit Feedback
          </Button>
        </Box>
      )}
    </Box>
  );
};`;
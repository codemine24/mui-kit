import React, { useState } from 'react';
import {
  Rating,
  TextField,
  Typography,
  Box,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

const RatingWithSubmitSnackbar: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating && text.trim()) {
      console.log('Rating:', rating);
      console.log('Feedback:', text);
      setSubmitted(true);
      setRating(null);
      setText('');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Leave a review
      </Typography>
      <Rating
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
      />
      {rating && (
        <>
          <TextField
            label="Feedback"
            multiline
            rows={3}
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 2 }}
            disabled={!text.trim()}
          >
            Submit
          </Button>
        </>
      )}

      <Snackbar
        open={submitted}
        autoHideDuration={3000}
        onClose={() => setSubmitted(false)}
      >
        <Alert severity="success" onClose={() => setSubmitted(false)}>
          Thank you for your feedback!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RatingWithSubmitSnackbar;

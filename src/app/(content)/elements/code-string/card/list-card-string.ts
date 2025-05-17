export const ListCardCodeString = `import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    Button
} from '@mui/material';

export const ListCardPreview = () => {
    const customers = [
        {
            id: 1,
            name: 'Neil Sims',
            email: 'email@windster.com',
            amount: '$320',
            avatar: '/api/placeholder/40/40'
        },
        {
            id: 2,
            name: 'Bonnie Green',
            email: 'email@windster.com',
            amount: '$3467',
            avatar: '/api/placeholder/40/40'
        },
        {
            id: 3,
            name: 'Michael Gough',
            email: 'email@windster.com',
            amount: '$67',
            avatar: '/api/placeholder/40/40'
        },
        {
            id: 4,
            name: 'Lana Byrd',
            email: 'email@windster.com',
            amount: '$367',
            avatar: '/api/placeholder/40/40'
        },
        {
            id: 5,
            name: 'Thomes Lean',
            email: 'email@windster.com',
            amount: '$2367',
            avatar: '/api/placeholder/40/40'
        }
    ];

    return (
        <Card sx={{ width: 400, borderRadius: 2 }}>
            <CardContent sx={{ px: 3, pt: 2, pb: 0 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h5" component="h2" fontWeight="bold">
                        Latest Customers
                    </Typography>
                    <Button color="primary" sx={{ textTransform: 'none' }}>
                        View all
                    </Button>
                </Box>

                <List sx={{ width: '100%', p: 0 }}>
                    {customers.map((customer, index) => (
                        <React.Fragment key={customer.id}>
                            <ListItem
                                alignItems="center"
                                sx={{
                                    py: 1.5,
                                    px: 0
                                }}
                            >
                                <ListItemAvatar>
                                    <Avatar src={customer.avatar} alt={customer.name} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" fontWeight="medium">
                                            {customer.name}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="body2" color="text.secondary">
                                            {customer.email}
                                        </Typography>
                                    }
                                />
                                <Typography variant="body1" fontWeight="medium">
                                    {customer.amount}
                                </Typography>
                            </ListItem>
                            {index < customers.length - 1 && (
                                <Divider component="li" />
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}`;
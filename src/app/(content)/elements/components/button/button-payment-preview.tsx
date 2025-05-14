import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PaymentIcon from "@mui/icons-material/Payment";
import { Box, Button, Stack } from "@mui/material";

export const ButtonPaymentPreview = () => {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                rowGap={2}
                flexWrap="wrap"
                alignItems="center"
            >
                {/* Connect With Opera Wallet - Replaced with Wallet icon */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<AccountBalanceWalletIcon />}
                >
                    Connect With Opera Wallet
                </Button>

                {/* Pay With Visa - Replaced with generic CreditCard icon */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<CreditCardIcon />}
                >
                    Pay With Visa
                </Button>

                {/* Pay With MasterCard - Same CreditCard icon */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<CreditCardIcon />}
                >
                    Pay With MasterCard
                </Button>

                {/* Pay With Stripe - PaymentIcon as substitute */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<PaymentIcon />}
                >
                    Pay With Stripe
                </Button>

                {/* Pay With Ethereum - CurrencyExchangeIcon as substitute */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<CurrencyExchangeIcon />}
                >
                    Pay With Ethereum
                </Button>

                {/* Pay With Bitcoin - CurrencyBitcoinIcon */}
                <Button
                    variant="contained"
                    startIcon={<CurrencyBitcoinIcon />}
                    sx={{
                        backgroundColor: "#FF901A",
                        color: "#ffffff",
                        "&:hover": {
                            backgroundColor: "#d87103",
                        },
                    }}
                >
                    Pay With Bitcoin
                </Button>

                {/* Pay With Paypal - MonetizationOnIcon as substitute */}
                <Button
                    variant="contained"
                    startIcon={<MonetizationOnIcon />}
                    sx={{
                        backgroundColor: "#F7BE38",
                        color: "#000000",
                        "&:hover": {
                            backgroundColor: "#FF901A",
                        },
                    }}
                >
                    Checkout With Paypal
                </Button>
            </Stack>
        </Box>
    );
};

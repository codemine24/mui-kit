export const ButtonPaymentCodeString = `
import { Box, Button, Stack } from "@mui/material";
import { FaOpera, FaBitcoin, FaPaypal, FaCcMastercard, FaStripe, FaEthereum } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";

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
                {/* Connect With Opera Wallet */}
                <Button variant="outlined" sx={{
                    backgroundColor: "transparent",
                    borderColor: "text.secondary",
                    color: "text.secondary",
                }} startIcon={<FaOpera />}>
                    Connect With Opera Wallet
                </Button>

                {/* Pay With Visa */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<RiVisaLine />}
                >
                    Pay With Visa
                </Button>

                {/* Pay With MasterCard */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<FaCcMastercard />}
                >
                    Pay With MasterCard
                </Button>

                {/* Pay With Stripe */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<FaStripe />}
                >
                    Pay With Stripe
                </Button>

                {/* Pay With Ethereum */}
                <Button
                    variant="outlined"
                    sx={{
                        backgroundColor: "transparent",
                        borderColor: "text.secondary",
                        color: "text.secondary",
                    }}
                    startIcon={<FaEthereum />}
                >
                    Pay With Ethereum
                </Button>

                {/* Pay With Bitcoin */}
                <Button
                    variant="contained"
                    startIcon={<FaBitcoin />}
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

                {/* Pay With Paypal */}
                <Button
                    variant="contained"
                    startIcon={<FaPaypal />}
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

`;
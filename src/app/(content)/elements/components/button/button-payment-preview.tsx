import { Icon } from "@iconify/react";
import Apple from "@mui/icons-material/Apple";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const ButtonPaymentPreview = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2} rowGap={2} flexWrap="wrap" alignItems="center">
        {/* Connect With Opera Wallet - Replaced with Wallet icon */}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderColor: "#ddd",
            color: "#000",
            textTransform: "none"
          }}
          startIcon={<Icon icon="devicon:opera" />}>
          Connect With Opera Wallet
        </Button>

        {/* Pay With Visa - Replaced with generic CreditCard icon */}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderColor: "#ddd",
            color: "#000",
            textTransform: "none"
          }}
          startIcon={<Icon height={25} width={25} icon="logos:visa" />}>
          Pay With Visa
        </Button>

        {/* Pay With MasterCard - Same CreditCard icon */}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderColor: "#ddd",
            color: "#000",
            textTransform: "none"
          }}
          startIcon={<Icon icon="logos:mastercard" />}>
          Pay With MasterCard
        </Button>

        {/* Pay With Stripe - PaymentIcon as substitute */}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderColor: "#ddd",
            color: "#000",
            textTransform: "none"
          }}
          startIcon={<Icon height={25} width={25} icon="logos:stripe" />}>
          Pay With Stripe
        </Button>

        {/* Pay With Ethereum - CurrencyExchangeIcon as substitute */}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderColor: "#ddd",
            color: "#000",
            textTransform: "none"
          }}
          startIcon={<Icon icon="logos:ethereum" />}>
          Pay With Ethereum
        </Button>

        {/* Pay With Bitcoin - CurrencyBitcoinIcon */}
        <Button
          variant="contained"
          startIcon={<Icon icon="logos:bitcoin" />}
          sx={{
            backgroundColor: "#FF901A",
            color: "#ffffff",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#d87103"
            }
          }}>
          Pay With Bitcoin
        </Button>

        {/* Pay With Paypal - MonetizationOnIcon as substitute */}
        <Button
          variant="contained"
          startIcon={<Icon icon="logos:paypal" />}
          sx={{
            backgroundColor: "#F7BE38",
            color: "#000000",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#FF901A"
            }
          }}>
          Checkout With Paypal
        </Button>

        <Button
          variant="contained"
          startIcon={<Apple />}
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#000000"
            }
          }}>
          Checkout With Apple Pay
        </Button>
      </Stack>
    </Box>
  );
};

import { createMuiTheme } from "@material-ui/core/styles";

export const defaultTheme = createMuiTheme({
    typography: {
        allVariants: {
            color: "#4F4F4F",
        },
    },
    palette: {
        text: {
            primary: "#4F4F4F",
            secondary: "#787878",
            disabled: "#D9D9D9",
        },
        primary: {
            light: "#CDE4FE",
            main: "#607AD7",
            dark: "#324690",
        },
        grey: {
            "50": "#FAFAFA",
            "100": "#F0F0F0",
            "200": "#D9D9D9",
            "300": "#D9D9D9",
            "400": "#B0B0B0",
            "500": "#B0B0B0",
            "600": "#787878",
            "700": "#787878",
            "800": "#4F4F4F",
            "900": "#4F4F4F",
        },
    },
});

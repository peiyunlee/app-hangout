import { extendTheme } from "native-base";

const colorTheme = {
  primary: {
    500: "#0D8BA4",
    400: "#11C1DA",
    300: "#80DEEA",
  },
  gray: {
    500: "#6B6B6B",
    400: "#BDBDBD",
    300: "#F2F2F2",
    100: "#FAFAFA",
  },
};

const fontTheme = {
  fonts: {
    heading: "Noto",
    body: "NotoSerif",
    mono: "Noto",
  },
  fontConfig: {
    Noto: {
      400: {
        normal: "NotoSansTC-Regular",
      },
      500: {
        normal: "NotoSansTC-Medium",
      },
      700: {
        normal: "NotoSansTC-Bold",
      },
    },
    NotoSerif:{
      400: {
        normal: "NotoSerifTC-Regular",
      },
    }
  },
  fontSizes: {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 22,
  },
};

export const theme = extendTheme({
  colors: colorTheme,
  fontConfig: fontTheme.fontConfig,
  fonts: fontTheme.fonts,
  fontSizes: fontTheme.fontSizes,
});

import { useColorScheme } from "react-native"
import AppColorsPallete, { LightColorsPallete } from "./ColorScheme"
import { FontFamily, FontSize, FontWeight } from "./Fonts"
import AppDefaultDimensions, { AppDimensions } from "./Shapes"

const AppFontFamily: FontFamily = {
  default: "",
  light: "",
  regular: "",
  medium: "",
  semiBold: "",
  bold: "",
  extraBold: ""
}

const AppFontSize: FontSize = {
  h6: 7,
  h5: 9,
  h4: 12,
  h3: 15,
  h2: 18,
  h1: 21
}

const AppFontWeights: FontWeight = {
  ExtraLight: "200",
  Light: "300",
  Regular: "400",
  Medium: "500",
  SemiBold: "600",
  Bold: "700",
  ExtraBold: "800"
}

type AppTheme = {
  colors: AppColorsPallete,
  spacings: AppDimensions,
  fontFamily: FontFamily,
  fontSize: FontSize,
  fontWeight: FontWeight,
  
}



const DefaultAppTheme: AppTheme = {
  colors: LightColorsPallete,
  spacings: AppDefaultDimensions,
  fontFamily: AppFontFamily,
  fontSize: AppFontSize,
  fontWeight: AppFontWeights
}


export default DefaultAppTheme;
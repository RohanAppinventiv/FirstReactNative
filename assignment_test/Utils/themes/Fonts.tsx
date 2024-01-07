
export type TextStyle = {
    fontWeight: string,
    fontFamily: string ,
    fontSize: number
}

export type FontSize = {
    h6: number, //extra small
    h5: number, //small
    h4: number, //medium
    h3: number, //large
    h2: number, //extra large
    h1: number //extra extra large
}

export type FontWeight = {
    ExtraLight: string,
    Light: string,
    Regular: string,
    Medium: string,
    SemiBold: string,
    Bold: string,
    ExtraBold: string
}
export type FontFamily = {
    default: string,
    light: string,
    regular: string,
    medium: string,
    semiBold: string,
    bold: string,
    extraBold: string
}

export default TextStyle
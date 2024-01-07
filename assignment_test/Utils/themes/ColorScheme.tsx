
interface AppColorsPallete{
    primaryColor: string,
    onPrimary: string,
    secondary: string,
    onSecondary: string,
    colorAccent: string,
    surfaceColor: string,
    onSurfaceColor: string,
    divColor: string,
    strokeColor: string,
    lightBaseColor: string
}

export const LightColorsPallete: AppColorsPallete = {
    primaryColor: '#ffffff',
    onPrimary: '#5C5C5C',
    secondary: '#65C979',
    onSecondary: '#ffffff',
    colorAccent: "#F4D24D",
    surfaceColor: "#EECA46",
    onSurfaceColor: '#4D4C4C',
    divColor: "#F4F4F4",
    strokeColor: '#AFAFAF',
    lightBaseColor: "#F0F0F0"
}

export const DarkColorsPallete: AppColorsPallete = {
    primaryColor: '#ffffff',
    onPrimary: '#5C5C5C',
    secondary: '#65C979',
    onSecondary: '#ffffff',
    colorAccent: "#F4D24D",
    surfaceColor: "#EECA46",
    onSurfaceColor: '#4D4C4C',
    divColor: "#F4F4F4",
    strokeColor: '#AFAFAF',
    lightBaseColor: "#F0F0F0"
}

export default AppColorsPallete;
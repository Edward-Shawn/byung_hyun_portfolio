import {useTheme} from "../../context";
const ThemeLight = () => {
    const [ThemeMode] = useTheme();

    const setThemeColor = ThemeMode === 'dark' ? '#CED0D6' : '#6C707E';


    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="6" stroke={setThemeColor} strokeWidth="1.5"/>
            <path d="M12 2V3" stroke={setThemeColor} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 21V22" stroke={setThemeColor} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M22 12L21 12" stroke={setThemeColor} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 12L2 12" stroke={setThemeColor} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M19.0708 4.92969L18.678 5.32252" stroke={setThemeColor} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M5.32178 18.6777L4.92894 19.0706" stroke={setThemeColor} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M19.0708 19.0703L18.678 18.6775" stroke={setThemeColor} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M5.32178 5.32227L4.92894 4.92943" stroke={setThemeColor} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )
}

export default ThemeLight;
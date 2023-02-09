import { useEffect, useState } from "react";

const LIGHT_MODES = {
    LIGHT: 'light',
    DARK: 'dark',
    SOLARIZED: 'solarized'
};

function useLightingMode(defVal) {

    const windowObj = typeof window !== 'undefined' && window;
    const localStorageObj = typeof localStorage !== 'undefined' && localStorage;
    const bodyEle = typeof document !== 'undefined' && document.body;

    const getInitialState = () => {
        const isSystemDark = windowObj && window?.matchMedia('(prefers-color-scheme: dark)')?.matches;
        const lighModeStored = localStorageObj && localStorage?.getItem('tf-cards-lighting-mode');
        return defVal || lighModeStored || (isSystemDark && LIGHT_MODES.DARK) || LIGHT_MODES.LIGHT;
    }

    const [lightMode, setLightMode] = useState(getInitialState())

    useEffect(() => {
        console.log('useLightingMode: ', lightMode, ' ', bodyEle);
        bodyEle?.classList.add(lightMode);
    }, [lightMode]);

    const changeLightMode = (newLightMode) => {
        let resLighMode = LIGHT_MODES[newLightMode.toUpperCase()] || lightMode;
        setLightMode(prevSt => {
            // console.log('useLightingMode_2: old', prevSt)
            // console.log('useLightingMode_2: new', newLightMode)
            bodyEle?.classList.remove(prevSt);
            bodyEle?.classList.add(newLightMode);
            return resLighMode
        });
    }


    return {
        lightMode,
        changeLightMode
    }
}

export default useLightingMode;
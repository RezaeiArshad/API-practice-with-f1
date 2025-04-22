import { createContext, PropsWithChildren, useContext } from "react";
import { useMediaQuery } from "react-responsive"


type ScreenSizeType = {
    isMobile: boolean;
}

const ScreenSizeContext = createContext<ScreenSizeType | undefined>(undefined);

export const useScreenSize = () => useContext(ScreenSizeContext);

export const ScreenSizeProvider = ({ children }: PropsWithChildren) => {
    const isMobile: boolean = useMediaQuery({ maxWidth: 768});

    return (
        <ScreenSizeContext.Provider value={{isMobile}}>
            {children}
        </ScreenSizeContext.Provider>
    )
}
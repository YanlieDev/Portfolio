import { useCallback } from "react";

const useScrollToSection = () => {
    const scrollTo =useCallback((id) =>{
        const element= document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },[]);
    return scrollTo;
};
export default useScrollToSection;
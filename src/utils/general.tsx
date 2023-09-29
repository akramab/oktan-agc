import { toast } from "react-toastify";

export const getAuthToken = () => {
    const data = localStorage.getItem("AUTH_TOKEN");
    if (data) {
        return data;
    }
    return "";
};

export const getCompetitionType = () => {
    const data = localStorage.getItem("COMPETITION_TYPE");
    if (data) {
        return data;
    }
    return "";
};

export const removeTokens = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("COMPETITION_TYPE");
    return "";
};

export const showToast = (message: string) => {
    toast.error(message);
};
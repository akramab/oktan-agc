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

export const getVerificationStatus = () => {
    const data = localStorage.getItem("VERIFIED");
    if (data) {
        return data;
    }
    return "";
};

export const checkUserType = () => {
    const data = localStorage.getItem("ROLE");
    if (data) {
        if (data === "ADMIN") {
            return true;
        }
        else if (data === "USER") {
            return false;
        }
    }
    return "";
};

export const removeTokens = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("COMPETITION_TYPE");
    localStorage.removeItem("VERIFIED");
    localStorage.removeItem("ROLE");
    return "";
};

export const showToast = (message: string) => {
    toast.error(message);
};

export const downloadFileAsync = async (data: any) => {
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "");
    link.click();
};
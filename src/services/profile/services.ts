import serviceInstance from "../serviceInstance"
import { URL } from "./url";

const Services = {
    postProfileData: (body:any) => {
        const url = URL.postProfileData;
        const response = serviceInstance.post(url,body);
        return response;
    },
    
    getProfileData: (email:string) => {
        const url = URL.getProfileData;
        const response = serviceInstance.get(url,email);
        return response;
    },

    getDocuments: () => {
        const url = URL.getDocuments;
        const response = serviceInstance.get(url);
        return response;
    }
}

export default Services;
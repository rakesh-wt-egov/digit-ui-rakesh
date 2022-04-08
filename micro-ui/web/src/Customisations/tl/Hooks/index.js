import { useQuery } from "react-query";

const setupLibraries = (Library,service, method) => {
    window.Digit = window.Digit || {};
    window.Digit['Hooks'] =  window.Digit['Hooks'] || {};
    window.Digit['Hooks'][Library] =  window.Digit['Hooks'][Library] || {};
    window.Digit['Hooks'][Library][service] = method;
};

const applicationDetails = () => {
    return console.log("test");
}

const useApplicationDetail = (t, tenantId, applicationNumber, config = {}, userType) => {
    return useQuery(
      ["APPLICATION_SEARCH", "TL_SEARCH", applicationNumber, userType],
      () => applicationDetails(),
      config
    );
};

const customize = () => { 
    setupLibraries('tl','useApplicationDetail',useApplicationDetail)
}
    
export default customize;
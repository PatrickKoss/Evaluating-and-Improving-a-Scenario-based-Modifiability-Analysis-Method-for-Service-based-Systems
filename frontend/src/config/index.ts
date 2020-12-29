// JSON config for this frontend project
export const config = {
    // identifier used for localStorage
    appId: "modifiabilitScenarioCreator",

     apiEndpoint: process.env.VUE_APP_BACKEND_URL || "http://localhost:3000",
    // apiEndpoint: process.env.API_URL,

    changeTypes: ["modification", "addition", "deletion"]
};

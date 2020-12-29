// JSON configuration for this frontend project
export const config = {
    // identifier used for localStorage
    appId: "modifiabilitScenarioCreator",

     apiEndpoint: process.env.VUE_APP_BACKEND_URL  || "https://api-scenario-creator.patrick-koss.de",
    // apiEndpoint: process.env.API_URL,

    changeTypes: ["modification", "addition", "deletion"]
};

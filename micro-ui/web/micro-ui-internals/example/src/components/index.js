import DemoComponent from "./DemoComponent";
import SelectName from "./SelectName";

const customisedComponent = {
    ...SelectName,
    // SelectPincode: DemoComponent,
}

export const initCustomisationComponents = () => {
    Object.entries(customisedComponent).forEach(([key, value]) => {
        window.Digit.ComponentRegistryService.setComponent(key, value);
    });
};
import { FormValues } from "interfaces/property";

export const validateForm = (formValues: FormValues) => {
    const errors: { message: string } = { message: '' };
    let hasError = false;

    Object.keys(formValues).forEach((key) => {
        switch (key) {
            case 'title':
                if (!formValues.title) {
                    errors.message = 'Title is required';
                    hasError = true;
                }
                break;
            case 'description':
                if (!formValues.description) {
                    errors.message = 'Description is required';
                    hasError = true;
                }
                break;
            case 'propertyType':
                if (formValues.propertyType) {
                    errors.message = 'Property type is requird';
                    hasError = true;
                }
                break;

            case 'price':
                if (!formValues.price) {
                    errors.message = 'Price is required';
                    hasError = true;
                }
                break;

            case 'location':
                if (!formValues.price) {
                    errors.message = 'Location is required';
                    hasError = true;
                }
                break;

            default:
                hasError = false;
        }
    });
    return { hasError, errors };
};
export const hasChanged = (intialValues: FormValues, currentValues: FormValues) => {
    const intialValuesArray = Object.values(intialValues);
    const currentValuesArray = Object.values(currentValues);
    for (let i = 0; i < intialValuesArray.length; i++) {
        if (intialValuesArray[i] !== currentValuesArray[i])
            return true;
    }
    return false;

};

// Remove list of properties from the object. Doesn't return anything
export const deletePropertiesFromObject = (object, propertiesToRemove) => {
    for (let property in propertiesToRemove) {
        delete object[property];
    }
}
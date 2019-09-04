
// Remove list of properties from the object. Doesn't return anything
export const deletePropertiesFromObject = (object, propertiesToRemove) => {
    for (let index in propertiesToRemove) {
        delete object[propertiesToRemove[index]];
        console.log(object)
    }
}

export const isDefined = (variable)=>{
    return typeof variable !== 'undefined';
}
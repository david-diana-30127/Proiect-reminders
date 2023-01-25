export const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
}

export const getFormattedDate = (date) => {
    if (typeof date === Date){
        return date.toISOString().split('T')[0];
    }
    return date.split('T')[0]
}
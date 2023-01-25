
export const getAuthorizedRequestHeaders = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
        return {
            headers: {"Authorization" : token}
        }
    }
}


export const serverUrl = "http://localhost:8080"
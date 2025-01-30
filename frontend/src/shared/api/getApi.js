const getApi = async (array) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/api_call`);
        const data = await response.json();
        array.value = data;
    } catch (error) {
        console.log(error);
    }
}

export default getApi;
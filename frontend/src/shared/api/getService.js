const getService = async (array) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}`);
        const data = await response.json();
        array.value = data;
        
    } catch (error) {
        console.log("Error: " + error);
    }
};

export default getService;
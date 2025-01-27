const getService = async (array) => {
    try {
        const response = await fetch('https://uapplication-frontend.onrender.com/api/');
        const data = await response.json();
        array.value = data;
        
    } catch (error) {
        console.log("Error: " + error);
    }
};

export default getService;
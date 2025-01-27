const getService = async (array) => {
    try {
        const response = await fetch('http://localhost:5000/api/');
        const data = await response.json();
        array.value = data;
        
    } catch (error) {
        console.log("Error: " + error);
    }
};

export default getService;
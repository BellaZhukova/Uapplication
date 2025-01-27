const getSite = async (array) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/site`);
        const data = await response.json(); 
        console.log(data);
        array.value = data;
    } catch (error) {
        console.log(error);
    }
}

export default getSite;
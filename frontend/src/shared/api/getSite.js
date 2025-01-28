const getSite = async (siteId, array) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/site/${siteId}`);
        const data = await response.json();
        array.value = data;
    } catch (error) {
        console.log(error);
    }
}

export default getSite;
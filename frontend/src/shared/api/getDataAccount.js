const getDataAccount = async (array) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/accounts`);
        const data = await response.json();
        array.value = data;
    } catch (error) {
        console.log(error);
    }
}

export default getDataAccount;
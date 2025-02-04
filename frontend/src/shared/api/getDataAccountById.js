const getDataAccountById = async (site_id, array) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/accounts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({site_id})
        });

        const data = await response.json();
        array.value = [data];
    } catch (error) {
        console.log(error);
    }
}

export default getDataAccountById;
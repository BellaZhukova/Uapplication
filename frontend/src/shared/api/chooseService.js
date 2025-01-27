const chooseService = async (name) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name}),
        })

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export default chooseService;
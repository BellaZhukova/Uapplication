const createData = async (service_id, login, token) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({service_id, login, token})
        })

        const data = await response.json();
        localStorage.setItem('account_id', data)
        localStorage.setItem('token', token)

        return data;

    } catch (error) {
        console.log(error);
    }
}

export default createData;
const createData = async (service_id, login, token, counter_id, name_site, url_site) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({service_id, login, token, counter_id, name_site, url_site})
        })

        localStorage.setItem('token', token);
        console.log(token)

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default createData;
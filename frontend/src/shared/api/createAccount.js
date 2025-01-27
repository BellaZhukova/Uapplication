const postToken = async (service_id, login, token) => {
    try {
        const response = await fetch('http://localhost:5000/api/account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({service_id, login, token})
        })

        localStorage.setItem('token', token);
        console.log(token)

        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export default postToken;
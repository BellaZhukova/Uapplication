const getVisits = async (path, counterId, array) => {
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${path}&id=${counterId}`, {
            method: 'GET',
            headers: {
                "Authorization": `OAuth ${token}`
            }
        })
        const data = await response.json();
        console.log(data)
        array.value = data

    } catch (error) {
        console.log(error);
    }
}

export default getVisits;
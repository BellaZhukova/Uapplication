const getCounters = async (array) => {

    const token = localStorage.getItem('token');
    try {
        const response = await fetch('https://api-metrika.yandex.net/management/v1/counters', {
            method: 'GET',
            headers: {
                'Authorization': `OAuth ${token}`
            }
        })

        const data = await response.json();
        array.value = data.counters;
    } catch (error) {
        console.log(error);
    }
}

export default getCounters;
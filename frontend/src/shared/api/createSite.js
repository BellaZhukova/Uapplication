const createSite = async (counter_id, name_site, url_site) => {
    const account_id = localStorage.getItem('account_id');
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/site`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({account_id, counter_id, name_site, url_site})
        })

        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default createSite;
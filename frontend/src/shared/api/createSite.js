const createSite = async (name_site, url_site) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/site`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name_site, url_site})
        })

        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export default createSite;
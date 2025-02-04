const updateAccountSiteId = async (site_id) => {
    const account_id = parseInt(localStorage.getItem('account_id'));
    try {
        const response = await fetch(`${import.meta.env.VITE_API_DEV}/account`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({account_id, site_id})
        });

        const data = await response.json();
        
    } catch (error) {
        console.log(error);
    }
}

export default updateAccountSiteId;
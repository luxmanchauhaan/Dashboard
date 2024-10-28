fetch('/dashboarddata')
    .then(response => response.json())
    .then(data =>{
        const h3element = document.getElementById('dataDisplay')
        console.log(data.total_investment);
        h3element.innerText = data.total_investment
    })
    .catch(error => console.error(error));


    
    fetch('https://cors-anywhere.herokuapp.com/https://plagiarismcheck.org/api/v1/text/report/18050981', {
        method: 'GET',
        headers:{
          'X-API-TOKEN':'Sc9LR1hzjuGv0QxsVw23vuzxe-kC7Pab'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

        const matchPercent=data.data.report_data.matched_percent

        const showMatchPercent=document.getElementById('matchPercent')
        showMatchPercent.innerHTML=`<strong>Match Percent: ${matchPercent}%</strong>`
        
        sources = data.data.report_data.sources

const sourcesListElement=document.getElementById('source')
        sourcesListElement.innerHTML='<h2> Source Details</h2>'
        sources.forEach((source, i) => {
            sourcesListElement.innerHTML += `<p><strong>Source ${i + 1}:</strong> <a href='${source.source}'>${source.source}</a> </p>`;
        });
    })
    .catch(error => console.error('Error:', error));


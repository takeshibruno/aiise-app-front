fetch(url_back + '/comunicados', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Handle the retrieved data
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });

    export default data;
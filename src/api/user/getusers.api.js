const login = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    let response = await fetch("http://localhost:8080/api/usuarios/", requestOptions);
    let jsonData = await response.json();

    return jsonData;
}

export default login;
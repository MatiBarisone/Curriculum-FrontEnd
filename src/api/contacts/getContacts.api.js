const getContactos = async (token, setContactos) => {
    var myHeaders = new Headers();
    myHeaders.append("jwt", token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let response = await fetch("http://localhost:8080/api/contactos/", requestOptions);
    let jsonData = await response.json();
    setContactos(jsonData);
    
    return jsonData;
}

export default getContactos;
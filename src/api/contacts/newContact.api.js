const contact = async (name, lastname, email, phone) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "name": name,
    "lastname": lastname,
    "email": email,
    "phone": phone
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
    
    let response = await fetch("http://localhost:8080/api/contactos/", requestOptions)
    let jsonData = await response.json();

    return jsonData;
}

export default contact;
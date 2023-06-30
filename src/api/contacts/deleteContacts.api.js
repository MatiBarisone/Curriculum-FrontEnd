const deleteContactos = async (token, contactoId) => {
    const myHeaders = new Headers();
    myHeaders.append("jwt", token);
  
    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
  
    const response = await fetch(`http://localhost:8080/api/contactos/${contactoId}`, requestOptions);
  
    if (response.ok) {
      try {
        if (response.status === 204) {
          return null;
        }
        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        console.error('Error al analizar la respuesta JSON:', error);
        throw error;
      }
    } else {
      console.error('Error de respuesta del servidor:', response.status);
      throw new Error(`Error de respuesta del servidor: ${response.status}`);
    }
  };
  
  export default deleteContactos;
// Configuración de la solicitud
const tursoEndpoint = "https://umipage-chaoswizard99.turso.io/v1/tables/mi_tabla/rows"; // Endpoint de la API REST
const authToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3Mzg1ODMxODksImlkIjoiNTJlYThjZGUtODIwYS00ZjlhLTkzYzctNjdiMTU5YzUzZWJiIn0.4qDbj2hpyBPfKjNTMQeR-wB0-3Jf1Lg0IqwSoQP__irm7CZurIFKPfZF9t-LPSPyj9WZGwiA0-5Kw0aBKhR9Aw"; // Token de autenticación

// Datos a insertar
const data = {
    address: "test1",
    score: 10
};

// Función para insertar datos en la tabla
async function insertData() {
    try {
        const response = await fetch(tursoEndpoint, {
            method: "POST", // Método HTTP para insertar datos
            headers: {
                "Authorization": `Bearer ${authToken}`, // Autenticación con el token
                "Content-Type": "application/json" // Tipo de contenido
            },
            body: JSON.stringify(data) // Convertir los datos a formato JSON
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Registro exitoso:", result);
        } else {
            console.error("Error al insertar datos:", response.statusText);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}

// Llamar a la función




const messages = [
    "Are you sure?",
    "Really sure??",
    "Bubu please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let mydir = "owo";

    fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    mydir = data.ip;
    //console.log('Your IP address is:', data.ip);
  })
  .catch(error => {
    mydir = "???";
    console.error('Error fetching IP address:', error);
  });


function test(){
    db.collection("users").add({
        first: "test first",
        last: "test last",
        born: 9999
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

// Función handleYesClick
function handleYesClick() {
    
}
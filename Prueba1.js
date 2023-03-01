const form = document.getElementById('form');
const input = document.getElementById('input');
const imageContainer = document.getElementById('image-container');
const buttonContainer = document.getElementById('button-container');
const apiKey = 'PslKWFfBicZtSeqy8OFjm67xGQPBl0ykRKmvA3Ksz9LiXNdyobOGz7ZQ';
const numFotosPag = 15;

const limpiarPagina = () => {
  imageContainer.innerHTML = '';
  buttonContainer.innerHTML = '';
};

const pintarFotos = (data, page) => {
  location.href = "pruebasfotosGrandes.html";
  const inicio = (page - 1) * numFotosPag;
  const fin = inicio + numFotosPag;
  const fotosParaPintar = data.photos.slice(inicio, fin);

  fotosParaPintar.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.src.tiny;
    img.alt = photo.photographer;
    imageContainer.append(img);
  });

  if (data.page > 1) {
    const prevButton = document.createElement('button');
    prevButton.innerText = "Página anterior";
    prevButton.addEventListener("click", () => cargarPagina(query, page - 1));
    buttonContainer.append(prevButton);
  }

  if (data.page < data.total_results / numFotosPag) {
    const nextButton = document.createElement('button');
    nextButton.innerText = "Página siguiente";
    nextButton.addEventListener("click", () => cargarPagina(query, page + 1));
    buttonContainer.append(nextButton);
  }
};

const cargarPagina = async (query, page) => {
  const apiUrl = `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=${numFotosPag}`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: apiKey
    }
  });

  const data = await response.json();

  limpiarPagina();
  
  pintarFotos(data, page);
};

const enviar = async (event) => {
  event.preventDefault();

  try {
    const query = input.value;
    const apiUrl = `https://api.pexels.com/v1/search?query=${query}&page=1&per_page=${numFotosPag}`;

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: apiKey
      }
    });

    const data = await response.json();

    limpiarPagina();

    pintarFotos(data, 1);
  } catch (error) {
    console.error(error);
  }

};

form.addEventListener('submit', enviar);
// Requisição de pesquisa por nome
export async function fetchSearchApi(nameMovie: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${nameMovie}&api_key=${process.env.API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Erro na requisição da API: ${response.status} - ${response.statusText}`
      );
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Ocorreu um erro na requisição da API", error);
<<<<<<< Updated upstream
    throw error; // Para usar a interface, mantenha o throw se necessário
=======
    throw error;
  }
}

export async function fetchApi(URL: string) {
  try {
    const response = await fetch(`${URL}?api_key=${process.env.API_KEY}`);
    if (!response.ok) {
      throw new Error(
        `Erro na requisição da API: ${response.status} - ${response.statusText}`
      );
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Ocorreu um erro na requisição da API", error);
    throw error;
>>>>>>> Stashed changes
  }
}

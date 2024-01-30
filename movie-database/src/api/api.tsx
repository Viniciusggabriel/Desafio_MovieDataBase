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
    throw error;
  }
}

export async function fetchNewApi() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
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
    throw error;
  }
}

export async function fetchPopularApi() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
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
    throw error;
  }
}

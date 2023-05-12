const KEY = '6ba751c3c2424ea88e1191752231205'; // Chave da API

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url); // Pega todas as respostas da API
  const data = await fetchResponse.json(); // Pega somente a resposta em .json da API

  return data; // retorna a resposta em .json com todos os dados climáticos
};

export default fetchData;

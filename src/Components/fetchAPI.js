import axios from "axios";

const options = {
  url: "https://weatherapi-com.p.rapidapi.com.json",
  params: { q: "<REQUIRED>" },
  headers: {
    "X-RapidAPI-Key": "8c3ec3c425mshb7667a4fb271420p12cf3ejsn8eed16b15dd9",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// export const getData = async () => {
//   try {
//     const res = await axios.get("https://weatherapi-com.p.rapidapi.com");
//     console.log(res.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// EXAMPLE 1 - How to get the Response Headers from an Axios request

import axios from 'axios';

async function getUser() {
  try {
    const response = await axios.get(
      'https://randomuser.me/api/',
    );

    console.log(response.headers);
    console.log(response.headers['date']);
    console.log(response.headers['etag']);
    console.log(response.headers['connection']);
    console.log(response.headers['content-type']);

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the Axios Response headers from a CORS request

// import axios from 'axios';

// async function getUser() {
//   try {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/posts',
//     );

//     console.log(response.headers);

//     console.log(response.headers['content-type']);
//     console.log(response.headers['cache-control']);
//     console.log(response.headers['expires']);
//     console.log(response.headers['pragma']);
//   } catch (err) {
//     console.log(err);
//   }
// }

// await getUser();

import type {  MetaFunction } from "@remix-run/node";

//import { json } from "@remix-run/node";
//import {   useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// type Animals = {
//   name: string;
//   domains: string[];
// };

// export const loader = async (args: LoaderFunctionArgs) => {
//   //fetching api token
//   const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
//     method: "POST",
//     body: new URLSearchParams({
//       grant_type: "client_credentials",
//       client_id: "0b5CWcWxxaW3fXPw7Lh2p0qMX9fpaYpOctVBLwbT3V4q2ift7I",
//       client_secret: "un5wi6EsUOmgy0qwvsfHTofWlXL7Pboo780HRHFS",
//     }),
//   });
//   const tokenData = await response.json();
//   //fetching api data
//   const res = await fetch(
//     `https://api.petfinder.com/v2/animals?location=${94546}`,
//     {
//       headers: {
//         Authorization: `Bearer ${tokenData.access_token}`,
//       },
//     }
//   );
//   const animalData: Animals[] = await res.json();
//   return json({ animalData });
// };

export default function Index() {
  //const { animalData } = useLoaderData<typeof loader>();
 // console.log("animalData:", animalData);
  //const [zipcode, setZipcode] = use("");
  return (
    <main>
      <div>
        <h1>PET FRIENDS!</h1>
        {/* <ul>
          {Array.isArray(animalData.animals) &&
            animalData.animals.map((animal) => (
              <li key={animal.id}>
                <p>Name: {animal.name}</p>
              </li>
            ))}
        </ul> */}
      </div>
      
    </main>
  );
}

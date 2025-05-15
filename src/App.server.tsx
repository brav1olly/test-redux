'use server';
export async function fetchUserData() {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   return res.json();
}

export default async function Counter() {
   const user = await fetchUserData();
   return (
      <div>

      </div>
   );
}
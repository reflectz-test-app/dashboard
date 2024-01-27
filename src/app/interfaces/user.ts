export type Gender = 'male' | 'female';
export interface User {
  "birthday": string,
  "email": string,
  "firstName": string,
  "lastName": string,
  "gender": Gender,
  "address": string,
  "city": string,
  "country": string,
  "amountSeats": number,
  "engine": 'fuel' | 'electric',
  "color": string,
  "hobby": string[]
}

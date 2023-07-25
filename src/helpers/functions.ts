export function seo(title:string) {
  document.title = title.trim().length > 0 ? `${title} | Jet Press` : "Jet Press";
}

export const dateFormatter = (dateString:string) => {
const date = new Date(dateString);
// const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

const year = date.getFullYear();
const dayNumber = ("0" + (date.getDate())).slice(-2);
const monthNumber = ("0" + (date.getMonth() + 1)).slice(-2);
const formattedDate = `${monthNumber} / ${dayNumber} / ${year}`;
return formattedDate;
}

export function generateRandomNumber(max:number) {
  return Math.floor(Math.random() * max);
}

export function removeBase64FromUrl(url:string) {
const  str =  url.split(",")[1];
return str;
}

export function addBase64InUrl(url:string) {
  const str = `data:image/jpeg;base64,${url}`
  return str;
}

export const sizePointsToInches = (points:number) => {
 return (points / 72).toFixed(2)
}

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const fetchListings = async() => {
    let res = await fetch("http://localhost:3000/api/listings",{ next: {revalidate: 1}});
    let data = res.json();
    return data;
}

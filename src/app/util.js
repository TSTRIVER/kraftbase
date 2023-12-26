export const fetchListings = async () => {
  let res = await fetch(
    "https://kraftbase-7e98-2q7lmcp1s-tstriver.vercel.app/api/listings",
    { next: { revalidate: 1 } }
  );
  let data = res.json();
  return data;
};

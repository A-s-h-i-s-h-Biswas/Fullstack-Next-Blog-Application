export const getBg = (cat) =>
  cat === "Coding"
    ? "bg-blue-400"
    : cat === "Fashion"
    ? "bg-violet-400"
    : cat === "Maths"
    ? "bg-green-400"
    : cat === "Cooking"
    ? "bg-orange-400"
    : cat === "Traveling"
    ? "bg-pink-400"
    : cat === "Music"
    ? "bg-gray-400"
    : cat === "Drawing"
    ? "bg-rose-400"
    : cat === "Photo"
    ? "bg-indigo-400"
    : "bg-rose-400";

export const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/category", {
    cache: "no-store",
  });
  // console.log((res.json()));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export const getAllPosts = async (catSlug) => {
  let res;
  console.log(catSlug);
  if (catSlug === "all") {
    res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
  } else {
    res = await fetch(
      `http://localhost:3000/api/category/catSlug?type=${catSlug}`,
      {
        cache: "no-store",
      }
    );
  }

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export const getSinglePost = async (slug) => {
  console.log(slug);
  const res = await fetch(`http://localhost:3000/api/posts/id?slug=${slug}`, {
    cache: "no-store",
  });
  // console.log((res.json()));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getUser = async (email) => {
  console.log(email);
  const res = await fetch(`http://localhost:3000/api/user?email=${email}`, {
    cache: "no-store",
  });
  // console.log((res.json()));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getDate = (date) => {
  const getMonth = new Map([
    ["01", "Jan"],
    ["02", "Feb"],
    ["03", "Mar"],
    ["04", "Apr"],
    ['05', "May"],
    ['06', "Jun"],
    ['07', "Jul"],
    ['08', "Aug"],
    ['09', "Sep"],
    ['10', "Oct"],
    ['11', "Nov"],
    ['12', "Dec"]
  ]);
  
  const month=getMonth.get(date.substring(5,7));
  const day=date.substring(8,10);
  const year=date.substring(0,4);
  return day+" "+month+", "+year;

};

export const getAllComments=async(id)=>{
  console.log(id);
  const res = await fetch(`http://localhost:3000/api/comments?slug=${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return [];
    // throw new Error("Failed to fetch data");
  }

  return res.json();
}

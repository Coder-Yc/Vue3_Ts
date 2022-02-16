allroutes = [
  {
    path: "/main/analysis/overview",
  },
];
menus = [
  {
    url: "/main/analysis/overview",
  },
];
const route = allroutes.find((value) => {
  console.log(value.path);
  console.log(menus[0].url);
  value.path.toString() === menus[0].url.toString();
});
console.log(route);

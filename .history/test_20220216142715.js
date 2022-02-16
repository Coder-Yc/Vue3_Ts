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
  value.path = menus[0].url;
});
console.log(route);

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
const route = allroutes.find((allroutes) => {
  allroutes.path = menus[0].url;
});
console.log(route);

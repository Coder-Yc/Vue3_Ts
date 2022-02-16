allroutes = [
  {
    path: "/main/analysis",
  },
];
menus = [
  {
    url: "/main/analysis",
  },
];
const route = allroutes.find((allroutes) => {
  allroutes.path = menus[0].url;
});
console.log(route);

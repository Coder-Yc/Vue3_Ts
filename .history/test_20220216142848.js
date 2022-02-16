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
const route = allroutes.find(({ path }) => {
  value.path = menus[0].url;
});
console.log(route);

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
  value.path === menus[0].url;
});
print(route);

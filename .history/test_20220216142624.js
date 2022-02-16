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
for (const item of allroutes) {
  if (item.path === menus.url) {
    return ture;
  }
}
console.log(route);

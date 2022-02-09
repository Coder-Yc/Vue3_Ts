class LocalCatch {
  setcatch(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}

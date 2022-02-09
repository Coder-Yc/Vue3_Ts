class LocalCatch {
  setcatch(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getcatch(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  delcatch(key: string, value: any) {
    const key = window.localStorage.removeItem(key);
  }
}

export default new LocalCatch();

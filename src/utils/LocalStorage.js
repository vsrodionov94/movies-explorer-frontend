export default class LocalStorage {
  get(key: string): string {
    try {
      return window?.localStorage.getItem(key);
    } catch (e) {
      throw new Error(e);
    } 
  }

  set(key: string, value: string): void {
    try {
      window?.localStorage.setItem(key, value);
    } catch (e) {
      throw new Error(e);
    } 
  }

  clear(): void {
    try {
      window?.localStorage.clear();
      console.log('clear')
    } catch (e) {
      throw new Error(e);
    } 
  }
}
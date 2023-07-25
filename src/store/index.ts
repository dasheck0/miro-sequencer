type StoreData = 'hasSeenOnboarding';

export class LocalStorateStore {
  private store: Record<StoreData, any>;
  private static instance: LocalStorateStore;

  private readonly storeName: string = 'ms_store';

  static getInstance() {
    if (!LocalStorateStore.instance) {
      LocalStorateStore.instance = new LocalStorateStore();
    }

    return LocalStorateStore.instance; 
  }

  private constructor() {
    this.store = {
      hasSeenOnboarding: false,
    };

    this.loadFromLocalStorage();
  }

  get(key: StoreData) {
    return this.store[key];
  }

  set<T>(key: StoreData, value: T) {
    this.store[key] = value;
    this.saveToLocalStorage();
  }

  remove(key: StoreData) {
    delete this.store[key];
    this.saveToLocalStorage();
  }

  private loadFromLocalStorage() {
    const store = localStorage.getItem(this.storeName);

    if (store) {
      this.store = JSON.parse(store);
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.storeName, JSON.stringify(this.store));
  }
}

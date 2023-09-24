import { LocalStorageService } from './local-storage.service';

describe('Local storage service', () => {
  let lsService: LocalStorageService;

  beforeEach(() => (lsService = new LocalStorageService()));

  afterEach(() => {
    // Очищаем localStorage после каждого теста
    localStorage.clear();
  });

  it('should set item to local storage', () => {
    const key = 'test key';
    const value = { test: 'value' };

    lsService.setItem(key, value);

    const storedValue = JSON.parse(localStorage.getItem(key));

    expect(storedValue).toEqual(value);
  });

  it('should get item from local storage', () => {
    const key = 'test key2';
    const value = { foo: 'bar' };

    localStorage.setItem(key, JSON.stringify(value));

    const storedValue = lsService.getItem(key);

    expect(storedValue).toEqual(value);
  });

  it('should return undefined for a non-existing key', () => {
    const key = 'nonExistingKey';

    const retrievedValue = lsService.getItem(key);

    expect(retrievedValue).toBeUndefined();
  });
});

import { LRU } from '../../lru-cache';

describe('LRU Cache', () => {
  let cache: LRU<string>;

  beforeEach(() => {
    cache = new LRU<string>(3);
  });

  it('Should set a  correct value in the cache', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');

    expect(cache.get('key1')).toEqual('value1');
    expect(cache.get('key2')).toEqual('value2');
  });

  it('Should evict the least recently used item when the cache is full', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');
    cache.set('key4', 'value4');

    expect(cache.get('key1')).toBeUndefined();
    expect(cache.get('key2')).toEqual('value2');
    expect(cache.get('key3')).toEqual('value3');
    expect(cache.get('key4')).toEqual('value4');
  });

  it('Should move the most recently used item to the end of the cache', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');

    expect(cache.get('key1')).toEqual('value1');
    cache.set('key4', 'value4');

    expect(cache.get('key1')).toEqual('value1');
    expect(cache.get('key2')).toBeUndefined();
    expect(cache.get('key3')).toEqual('value3');
    expect(cache.get('key4')).toEqual('value4');
  });

  it('should delete a value from the cache', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');

    cache.delete('key1');

    expect(cache.get('key1')).toBeUndefined();
    expect(cache.get('key2')).toEqual('value2');
  });

  it('should clear the cache', () => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');

    cache.clear();

    expect(cache.get('key1')).toBeUndefined();
    expect(cache.get('key2')).toBeUndefined();
  });
});

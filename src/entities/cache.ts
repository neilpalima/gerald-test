import * as NodeCache from 'node-cache';

const ttl = parseInt(process.env.CACHE_TTL as string);
const cache = new NodeCache({
  stdTTL: ttl
});

export const getOrStore = async <T> (key: string, getFn: () => T | Promise<T>): Promise<T> => {
  let value: T | undefined = cache.get(key);

  if (value === undefined) {
    value = await getFn();

    cache.set(key, value);
  }

  return value;
};

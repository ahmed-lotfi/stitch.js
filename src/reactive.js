import { track, trigger } from "./effect.js";

export function reactive(obj) {
  const keys = Object.keys(obj);
  const reactiveObj = {};

  keys.forEach((key) => {
    let value = obj[key];
    Object.defineProperty(reactiveObj, key, {
      get() {
        track(reactiveObj, key);
        return value;
      },
      set(newValue) {
        if (newValue !== value) {
          value = newValue;
          trigger(reactiveObj, key);
        }
      },
    });
  });

  return reactiveObj;
}

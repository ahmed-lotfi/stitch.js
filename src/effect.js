const depsMap = new Map();
let currentEffect = null;
const effectStack = [];

export function createEffect(fn) {
  const effect = function (...args) {
    if (!effectStack.includes(effect)) {
      try {
        currentEffect = effect;
        effectStack.push(effect);
        return fn(...args);
      } finally {
        effectStack.pop();
        currentEffect = effectStack[effectStack.length - 1];
      }
    }
  };

  effect();
  return effect;
}

export function track(target, key) {
  if (!currentEffect) return;

  let deps = depsMap.get(target);
  if (!deps) {
    deps = new Map();
    depsMap.set(target, deps);
  }

  let dep = deps.get(key);
  if (!dep) {
    dep = new Set();
    deps.set(key, dep);
  }

  dep.add(currentEffect);
}

export function trigger(target, key) {
  const deps = depsMap.get(target);
  if (!deps) return;

  const dep = deps.get(key);
  if (dep) {
    const effectsToRun = new Set(dep);
    effectsToRun.forEach((effect) => effect());
  }
}

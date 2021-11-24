export default function isFunction<V = Function>(a: any): a is V {
  return typeof (a as Function) === 'function'
}

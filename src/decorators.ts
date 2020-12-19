export const minimumValue = (propName: string, min: number) => 
(constructor: any, methodName: string, descriptor: PropertyDescriptor): any => {
  const originalFn = descriptor.value
  descriptor.value = async function wrapper(...args) {
      const results = await originalFn.apply(this, args)

      return results.map(r => ({...r, [propName]: r[propName] < min ? min : r[propName]}))
  }
}
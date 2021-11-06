const pluck = (keys, map) => {
  if (!keys.length) return map

  const newObj = { ...map }

  keys.forEach((key) => delete newObj[key])

  return newObj
}

const apply = (type) => ({ apis, props }) => {
  const keys = Object.keys(apis)

  return keys.reduce(($, key) => {
    const fn = apis[key]
    if (!fn) return $

    return {
      ...$,
      ...(fn(props)[type] || {})
    }
  }, {})
}

const isString = (val) => typeof val === 'string'
const isConfig = (val) => typeof val === 'object'

const applyCss = apply('css')
const applyProps = apply('props')

const useApis = (tokens) => {
  const use = (apisToUse) => {
    const apis = {}
    let blacklist = []
    apisToUse.forEach(($) => {
      let api

      if (isConfig($)) {
        api = $.fn(tokens)
        apis[$.name] = api
      } else if (isString($)) {
        api = require('./' + $).default(tokens)
        apis[$] = api
      }

      blacklist = api.blacklist ? [...blacklist, ...api.blacklist] : blacklist
    })

    return (Base) => {
      return ({ ...props }) => {
        const params = { apis, props }
        const css = applyCss(params)
        props.css = {
          ...(props.css || {}),
          ...css
        }

        return (
          <Base
            {...{
              ...pluck(blacklist, props),
              ...applyProps(params)
            }}
          />
        )
      }
    }
  }
  return {
    use
  }
}

export default useApis

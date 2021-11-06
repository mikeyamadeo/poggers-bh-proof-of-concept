import * as React from 'react'
import { VStack, HStack, Text, Button, Element, Avatar } from '@client/ui'

const tribe = [
  'tribe.bee',
  'tribe.cat',
  'tribe.dog',
  'tribe.elephant',
  'tribe.frog',
  'tribe.gorilla',
  'tribe.llama',
  'tribe.mouse',
  'tribe.owl',
  'tribe.panda',
  'tribe.penguin',
  'tribe.turtle',
  'tribe.zero'
]
const bg = [
  'bg.apple',
  'bg.lemon',
  'bg.space',
  'bg.spiral'
]
const head = [
  'head.none',
  'head.#1',
  'head.beanie',
  'head.rainbow-afro',
  'head.propeller'
]
const eye = [
  'eye.none',
  'eye.3d',
  'eye.heart',
  'eye.scanner',
  'eye.wizard',
  'eye.zero-sleezy',
]
const body = [
  'body.none',
  'body.hawaiian',
  'body.nifty',
  'body.polo',
  'body.zero-crop'
]
const mouth = [
  'mouth.none',
  'mouth.gum',
  'mouth.pacifier',
  'mouth.zero-straw'
]
const neck = [
  'neck.bib',
  'neck.noodle',
  'neck.lei',
  'neck.cyberking'
]
const metadata = {
  bg,
  body,
  eye,
  head,
  mouth,
  neck,
  tribe,
}
const pogger1 = {
  bg: {
    name: 'bg',
    value: 'spiral',
    descriptor: 'bg.spiral',
    probability: 0.75
  },
  tribe: {
    name: 'tribe',
    value: 'zero',
    descriptor: 'tribe.zero',
    probability: 0.75
  },
  head: {
    name: 'head',
    value: 'none',
    descriptor: 'head.none',
    probability: 0.20
  },
  eye: {
    name: 'eye',
    value: 'scanner',
    descriptor: 'eye.scanner',
    probability: 0.20
  },
  body: {
    name: 'body',
    value: 'zero-crop',
    descriptor: 'body.zero-crop',
    probability: 0.20
  },
  mouth: {
    name: 'mouth',
    value: 'none',
    descriptor: 'mouth.none',
    probability: 0.20
  },
  neck: {
    name: 'mouth',
    value: 'none',
    descriptor: 'neck.none',
    probability: 0.20
  }


}
const pogger2 = {
  bg: {
    name: 'bg',
    value: 'lemon',
    descriptor: 'bg.lemon',
    probability: 0.20

  },
  tribe: {
    name: 'tribe',
    value: 'gorilla',
    descriptor: 'tribe.gorilla',
    probability: 0.20
  },
  head: {
    name: 'head',
    value: 'beanie',
    descriptor: 'head.beanie',
    probability: 0.75
  },
  eye: {
    name: 'eye',
    value: 'wizard',
    descriptor: 'eye.wizard',
    probability: 0.75
  },
  body: {
    name: 'body',
    value: 'none',
    descriptor: 'body.none',
    probability: 0.75
  },
  mouth: {
    name: 'mouth',
    value: 'none',
    descriptor: 'mouth.none',
    probability: 0.75
  },
  neck: {
    name: 'neck',
    value: 'none',
    descriptor: 'neck.none',
    probability: 0.75
  }
}

const config = {
  p1: {
    traits: ['bg', 'tribe'],
    weights: [
      { value: 'p1', weight: 0.75 },
      { value: 'p2', weight: 0.2 },
      { value: 'rng', weight: 0.05 }
    ]
  },
  p2: {
    traits: ['head', 'eye', 'body', 'mouth', 'neck'],
    weights: [
      { value: 'p2', weight: 0.75 },
      { value: 'p1', weight: 0.2 },
      { value: 'rng', weight: 0.05 }
    ]
  }
}
// const p1Weights = [
//   { value: 'p1', weight: 0.75 },
//   { value: 'p2', weight: 0.2 },
//   { value: 'rng', weight: 0.05 }
// ]
// const p2Weights = [
//   { value: 'p2', weight: 0.75 },
//   { value: 'p1', weight: 0.2 },
//   { value: 'rng', weight: 0.05 }
// ]

const traitList = ['bg', 'tribe', 'head', 'eye', 'body', 'mouth', 'neck']
const blackHole = (p1, p2) => {
  const pogger = traitList.reduce((pogger, traitName) => {
      const options = traitName === 'bg' || traitName === 'tribe'
        ? config.p1.weights
        : config.p2.weights
      const weights = options.map($ => $.weight)

      const {value, weight} = options[weightedRand(weights)]
      let traitConfig = p1[traitName]

      if (value === 'p2') {
        traitConfig = p2[traitName]
      } else if (value === 'rng') {
        const traitList = metadata[traitName]
        const descriptor = traitList[getRandomInt(0, traitList.length - 1)]
        traitConfig = {
          value: descriptor.split('.')[1]
        }
      }

      return {
        ...pogger,
        [traitName]: {
          name: traitName,
          value: traitConfig.value,
          descriptor: value + '.' + traitConfig.value,
          probability: weight
        }
      }
    }
    , {})

  return pogger
}

export default function Home () {
  const [pogger, set] = React.useState()

  const rng = () => {
    const result = blackHole(pogger1, pogger2)
    console.log({result})
    set(result)
  }
  return (
    <VStack x h='100vh' y bg='black' css={{color: 'white'}} gap={3}>
      <HStack gap={3} y w='100%' pl='calc(50% - 400px)'>
        <Avatar src='/pixel.png' />
        <Text variant='title' size={5}>Black Hole Proof of Concept</Text>
      </HStack>
      <HStack gap={3}>
        
        <Pogger name='pogger 1' traits={pogger1} />
        <Pogger name='pogger 2' traits={pogger2} />
        {pogger && <Pogger name='black hole pogger' traits={pogger} />}
      </HStack>
      <VStack py={4} x w='400px' m='0 auto'>
        <Button variant='secondary' fullWidth onClick={rng}>send to black hole</Button>
      </VStack>

    </VStack>
  )
}

const assetToZindex = {
  bg: 1,
  tribe: 2,
}
const Asset = ({src, size}) => <img src={src} width='100%' height='100%' />

const Pogger = ({ name, traits }) => {
  return (
    <VStack p={4} gap={3}>
      <Text variant='title'>{name}</Text>
      <VStack gap={3}>
        
        <VStack w='250px' h='250px' css={{border: '1px solid blue'}} position='relative'>
        {Object.keys(traits).map(key => {
          const trait = traits[key]
  
            if (trait.value === 'none') return null

            const src = require(`./assets/${trait.name}/${trait.value}.png`).default.src

            return (
              <Element position='absolute' left={0} top={0} css={{zIndex: assetToZindex[name]}} w='100%' h='100%'>
                <Asset src={src} />
              </Element>
            )
        })}
        </VStack>
        <VStack gap={1}>

          {Object.keys(traits).map(key => {
            const trait = traits[key]
            return (
              <HStack key={key} w='250px' space='between'>
                <Text variant='light'>{trait.name}:</Text> 
                <HStack gap={2}css={{textAlign: 'right'}}>

                <Text variant='light'>{trait.value}</Text>
                 {trait.probability && <Text variant='light'>({trait.probability * 100}%)</Text>}
                </HStack>
              </HStack>
            )
          })}
        </VStack>

      </VStack>
    </VStack>
  )
}

function weightedRand (spec) {
  let i; let sum = 0; const r = Math.random()
  for (i in spec) {
    sum += spec[i]
    if (r <= sum) return Number(i)
  }
}
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

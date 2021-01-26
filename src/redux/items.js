import anonymous from '../icons/anonymous.svg'
import bender from '../icons/bender.svg'
import billshifr from '../icons/billshifr.svg'
import deadpool from '../icons/deadpool.svg'
import finn from '../icons/finn.svg'
import gremlin from '../icons/gremlin.svg'
import krueger from '../icons/krueger.svg'
import mario from '../icons/mario.svg'
import naruto from '../icons/naruto.svg'
import neo from '../icons/neo.svg'
import rick from '../icons/rick.svg'
import ring from '../icons/ring.svg'
import simpson from '../icons/simpson.svg'
import stark from '../icons/stark.svg'
import tom from '../icons/tom.svg'
import vader from '../icons/vader.svg'
import walterwhite from '../icons/walterwhite.svg'
import wolverine from '../icons/wolverine.svg'
import {shuffleArray} from '../utils/utils'

const icons = {
    anonymous,
    bender,
    billshifr,
    deadpool,
    finn,
    gremlin,
    krueger,
    mario,
    naruto,
    neo,
    rick,
    ring,
    simpson,
    stark,
    tom,
    vader,
    walterwhite,
    wolverine
}
const properties = Object.keys(icons)

const itemCreator = (id, property, icon) => {
    return {
        id,
        isOpen: false,
        finished: false,
        property,
        icon
    }
}

export const arrayItemsCreator = () => {
    const part1 = []
    const part2 = []

    for(let i = 0; i < properties.length; i++) {
        const item = itemCreator(i+1, properties[i], icons[properties[i]])
        part1.push(item)
    }

    let y = 0

    for(let j = properties.length; j < properties.length*2; j++, y++) {
        const item = itemCreator(j+1, properties[y], icons[properties[y]])
        part2.push(item)
    }


    const union = shuffleArray([...part1, ...part2])


    let propsPart1 = []
    let propsPart2 = []
    let propsPart3 = []
    let propsPart4 = []
    let propsPart5 = []
    let propsPart6 = []
    for(let i = 0; i < union.length; i++) {
        if(i < 6) {
            propsPart1.push(union[i].property)
        }
        if(i > 5 && i < 12) {
            propsPart2.push(union[i].property)
        }
        if(i > 11 && i < 18) {
            propsPart3.push(union[i].property)
        }
        if(i > 17 && i < 24) {
            propsPart4.push(union[i].property)
        }
        if(i > 23 && i < 30) {
            propsPart5.push(union[i].property)
        }
        if(i > 29 && i < 36) {
            propsPart6.push(union[i].property)
        }
    }
    console.log(JSON.stringify(propsPart1))
    console.log(JSON.stringify(propsPart2))
    console.log(JSON.stringify(propsPart3))
    console.log(JSON.stringify(propsPart4))
    console.log(JSON.stringify(propsPart5))
    console.log(JSON.stringify(propsPart6))
    console.log('-----------------------------------------------------------------------')

    return union
    //return [...part1, ...part2]
}
import expresso from '../assets/expresso.svg'
import americano from '../assets/americano.svg'
import expressoCremoso from '../assets/expresso-cremoso.svg'
import cafeGelado from '../assets/cafe-gelado.svg'
import cafeComLeite from '../assets/cafe-com-leite.svg'
import latte from '../assets/latte.svg'
import capuccino from '../assets/capuccino.svg'
import macchiato from '../assets/macchiato.svg'
import mocaccino from '../assets/mocaccino.svg'
import chocolateQuente from '../assets/chocolate-quente.svg'
import cubano from '../assets/cubano.svg'
import havaiano from '../assets/havaiano.svg'
import arabe from '../assets/arabe.svg'
import irlandes from '../assets/irlandes.svg'

export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imageUrl: expresso,
    price: 9.9,
    tags: ['Tradicional'],
    availableQuantity: 3,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imageUrl: americano,
    price: 9.9,
    tags: ['Tradicional'],
    availableQuantity: 3,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imageUrl: expressoCremoso,
    price: 9.9,
    tags: ['Tradicional'],
    availableQuantity: 3,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imageUrl: cafeGelado,
    price: 9.9,
    tags: ['Tradicional', 'Gelado'],
    availableQuantity: 3,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imageUrl: cafeComLeite,
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    availableQuantity: 3,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imageUrl: latte,
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    availableQuantity: 3,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imageUrl: capuccino,
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    availableQuantity: 3,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imageUrl: macchiato,
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    availableQuantity: 3,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imageUrl: mocaccino,
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    availableQuantity: 3,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imageUrl: chocolateQuente,
    price: 9.9,
    tags: ['Tradicional', 'Com Leite'],
    availableQuantity: 3,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imageUrl: cubano,
    price: 9.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    availableQuantity: 3,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imageUrl: havaiano,
    price: 9.9,
    tags: ['Especial'],
    availableQuantity: 3,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imageUrl: arabe,
    price: 9.9,
    tags: ['Especial'],
    availableQuantity: 3,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imageUrl: irlandes,
    price: 9.9,
    tags: ['Especial', 'Alcoólico'],
    availableQuantity: 3,
  },
]

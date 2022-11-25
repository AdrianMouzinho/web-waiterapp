import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    _id: 'sasdfjasdf',
    table: '2',
    status: 'WAITING',
    products: [
      {
        _id: 'kasf9sf9ads',
        quantity: 2,
        product: {
          name: 'Pizza Quatro Queijos',
          price: 40,
          imagePath: '1668786608231-quatro-queijos.png',
        }
      },
      {
        _id: 'hasfiasdjfoa',
        quantity: 1,
        product: {
          name: 'Pizza Frango com Catupiry',
          price: 40,
          imagePath: '1668786969869-frango-catupiry.png',
        }
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}

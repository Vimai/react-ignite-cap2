import { useEffect }from 'react';
import { Container } from './styles'

export function TransactionsTable(){
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then((response) => response.json())
        .then(data => console.log(data))
    }, []);

    return (
        <Container>
            <h1> Ola</h1>
        </Container>
    )
}
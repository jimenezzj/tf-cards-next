import { utilHooks } from '../../api/hooks';
import useSWR from "swr";

function CardsPage(props) {

    const url = 'https://25524bb1-f33f-4053-8619-1e9daaa26473.mock.pstmn.io';
    const { data, isLoading, error } = useSWR(`${url}/cards`, utilHooks.fetcher)
    const { cards } = data.body;

    console.log(data);
    if (error) {
        console.log(error);
        return <p>Error fetching tf cards</p>
    }

    return (
        isLoading
            ? <p>Loading...</p>
            : <div>
                <h2>TF Cards Pages</h2>
                {cards.map(({ id, name }) =>
                    <div key={id}>
                        <h3>{name}</h3>
                    </div>
                )}
            </div>
    )
}

export default CardsPage;
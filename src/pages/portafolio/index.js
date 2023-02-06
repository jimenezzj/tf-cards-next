import Link from "next/link";

function PortaolioPage() {

    const projects = [
        {
            id: 1,
            name: 'Tetris React'
        },
        {
            id: 2,
            name: 'My Portafolio'
        },
        {
            id: 3,
            name: 'EPT Recreation'
        },
    ];

    return (
        <div>
            <h2>Portafolio Page</h2>
            <ul>
                {projects.map((p, i) =>
                    <li key={p.id} >
                        {
                            p?.name &&
                            <Link href={{ pathname: '/portafolio/[id]', query: { id: p.id } }} >
                                {p.name}
                            </Link>
                        }
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PortaolioPage;
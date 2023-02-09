import FigureListItem from "./figures-item";

function FigureList(props) {

    const { figures } = props;

    // console.log(figures);

    return (
        <div>
            <ul className="flex">
                {
                    figures instanceof Array && figures?.length
                    && figures.map(f => <FigureListItem item={f} key={f.id} />)
                }
            </ul>
        </div>

    )
}

export default FigureList;
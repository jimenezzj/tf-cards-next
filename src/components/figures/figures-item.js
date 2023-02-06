import TfcCard from "@/components/UI/card/card";
function FigureListItem(props) {

    const { item } = props;
    const { id, name, serie } = item;

    console.log("FigureListItem: ", item);

    const getSeriesName = (serieCode) => {
        let serieName = null;
        switch (serieCode) {
            case 'st':
                serieName = 'Studio Series';
                break;
            case 'mpm':
                serieName = 'Master Piece';
                break;
            default:
                break;
        }
        return serieName
    }

    return (
        <li className="max-[150px] pl-2 last-of-type:pl-0">
            <TfcCard>
                <div className="flex">
                    <h4>{getSeriesName(serie?.line)}</h4>
                    <ul className="flex">
                        {
                            Array(3).fill(null).map(() => (
                                <li>
                                    <span className="p-1 bg-red-700"></span>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="flex justify-between">
                    <figure>
                        <em>*</em>
                    </figure>
                    <h3>{name}</h3>
                    <p>{serie.id}</p>
                </div>
            </TfcCard>
        </li>
    )
}

export default FigureListItem;
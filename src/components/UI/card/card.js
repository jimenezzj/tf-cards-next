import styleModule from './card.module.css';

function TfcCard(props) {
    const { } = props;
    const { 'tfc-card': tfcCard } = styleModule
    return (
        <div className={[tfcCard]}>
            {
                props?.children
            }
        </div>
    )
}

export default TfcCard;
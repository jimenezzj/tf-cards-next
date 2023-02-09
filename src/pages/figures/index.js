import FigureList from "@/components/figures/figures-list";
import path from "path";
import { readFile } from "fs/promises";
import useLightingMode from "@/utils/hooks/useLightingMode";

function FiguresPage(props) {

    const { lightMode, changeLightMode } = useLightingMode();
    const { figures: figuresArr } = props;

    // console.log('FiguresPage: ', lightMode);

    return (
        <div className="my">
            <h2 className="my-3 dark:bg-teal-500 dark:text-gray-50">Figures (All Collections)</h2>
            <button className="my-3" onClick={() => changeLightMode(lightMode === 'dark' ? 'light' : 'dark')} >Swith light/dark</button>
            <FigureList figures={figuresArr} />

        </div>
    )
}

export async function getServerSideProps(ctx) {
    const resProps = { props: { figures: null } };

    const filePath = path.join(process.cwd(), 'data', 'dummy_figures.json');
    const jsonData = await readFile(filePath);
    const data = JSON.parse(jsonData);
    // console.log(data);
    resProps.props.figures = data.figures;

    return resProps;
}


export default FiguresPage;
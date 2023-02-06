import FigureList from "@/components/figures/figures-list";
import path from "path";
import { readFile } from "fs/promises";

function FiguresPage(props) {

    const { figures: figuresArr } = props;

    // console.log(figuresArr);

    return (
        <div>
            <h2 className="my-3">Figures (All Collections)</h2>
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
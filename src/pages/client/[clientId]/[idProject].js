import { useRouter } from "next/router";

function ClienteProjectPage() {

    const router = useRouter();
    const clntName = "Client Name";
    const clnProjectName = "Client Name";

    console.log(router.query);
    
    return (
        <>
            <h2>{clntName}({router.query?.clientId || ''})</h2>
            <p>Project: {clnProjectName}</p>
        </>
    );
}

export default ClienteProjectPage;
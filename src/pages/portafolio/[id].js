import { useRouter } from "next/router";

function PortaolioItemPage() {
    const router = useRouter();

    console.log("Prortafolio Item Page ", router.pathname);
    console.log("Prortafolio Item Page ", router.query);

    return (
        <>
            <p><strong>Item {router.query?.id || ''}</strong></p>
        </>
    );
}

export default PortaolioItemPage;
function UserProfilePage(props) {

    const { name: uName, email: uEmail } = props.user;

    return (
        <div>
            <h2>User Profile</h2>
            <p>
                <strong>Name: </strong>
                <span>{uName}</span>
            </p>
            <p>
                <strong>Email: </strong>
                <span>{uEmail}</span>
            </p>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    console.log('UserProfile ');
    const { params, req, res } = ctx;

    let resProps = {
        props: {
            user: {
                name: 'Josh',
                email: 'jjosh@outlook.com'
            }
        }
    };

    return resProps;
}

export default UserProfilePage;
import Nav from '../components/Nav';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

export default function Users({users}) {
    return( 
        <>
            <Head>
                <title>Users List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav/>

            <div className="container">
                <main>
                    {users.map(user => {
                        return(
                            <div key={user._id}>
                                <p>My name is {user.name} and I have {user.eyeColor} eyes</p>
                            </div>
                        )
                    })}
                    <style jsx>{`
                        .container {
                            min-height: 100vh;
                            max-width: 940px;
                            margin: 0 auto;
                        }
                        main {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            padding-top: 100px;
                            font-family: sans-serif;
                        }
                    `}</style>
                </main>
                    
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch("http://www.json-generator.com/api/json/get/cgcEEPXOJK?indent=2")
    const users = await response.json()

    return { props: {users}}
}
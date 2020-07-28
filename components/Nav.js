import Link from 'next/link';


export default function Nav () {
    return(
        <>
            <nav>
                <Link href={'/'}><a>HOME</a></Link>
                <Link href={'/users'}><a>USERS</a></Link>
            </nav>
            <style jsx>{`
                nav {
                    background: blue;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                }
                nav a {
                    font-size: 25px;
                    padding: 30px 50px;
                    color: white;
                    font-family: sans-serif;
                }
            `
            }
            </style>
        </>
    )
}
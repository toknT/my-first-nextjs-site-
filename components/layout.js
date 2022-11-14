import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <h2>todo: Navbar
                <ul>
                    <li>
                        <Link
                            href={{
                                pathname: '/posts/[id]',
                                query: { id: 1 },
                            }}
                        >post id = 1</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/blog/hello-world">Blog Post</Link>
                    </li>
                </ul>
            </h2>
            <main>{children}</main>
            <h2>todo: Footer</h2>
        </>
    )
}
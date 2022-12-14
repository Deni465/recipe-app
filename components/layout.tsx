import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { ReactNode } from "react";

const name = "Recipe Search App";
export const siteTitle = "Recipe Search App";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <>
                    <ul className={styles.navbar}>
                        <li className={styles.navbarli}>
                            <Link className="link" href="/">
                                Home
                            </Link>
                        </li>
                        <li className={styles.navbarli}>
                            <Link className="link" href="/searchrecipe">
                                Search Recipe
                            </Link>
                        </li>
                        <li className={styles.navbarli}>
                            <Link className="link" href="/addrecipe">
                                Add Recipe
                            </Link>
                        </li>
                        <li className={styles.navbarli}>
                            <Link className="link" href="/">
                                The Finest
                            </Link>
                        </li>
                    </ul>
                </>
            </header>
            <main>{children}</main>
        </div>
    );
}

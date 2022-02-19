import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost(){

    return  (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
        />
        <style jsx>{`
        
        `}</style>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
            <a>Back to home</a></Link>
        </h2>
        <Image
            src="/images/profile.jpeg"
            height={144}
            width={144}
            alt="Your Name"
        />
    </Layout>
    )
}
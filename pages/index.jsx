import Image from "next/image"
import Head from "next/head"

import cuteface2 from "@/public/cuteface2.png"

export default function Cuteface2() {
	return (
		<>
			<Head>
				<title>cuteface2</title>
				<meta property="og:title" content="cuteface2" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://cuteface2.vercel.app" />
				<meta property="og:image" content="https://cuteface2.vercel.app/cuteface2.png" />
				<meta property="og:description" content="cuteface2" />
				<meta name="theme-color" content="#F8940C"></meta>
			</Head>
			<Image src={cuteface2} className="cuteface2" alt="cuteface2" />
		</>
	)
}
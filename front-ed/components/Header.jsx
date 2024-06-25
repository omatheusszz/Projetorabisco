import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header(props) {
    let tamanho
    if(props.size=="big"){
        tamanho = "22pt"
    }else{
        tamanho = "16pt"
    }
    return (
        <header className={styles.header} style={{
            backgroundColor:props.bgcolor
        }} >
            <aside className={styles.aside}>
                <img src="logo/logo2.png" className={styles.img}/>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.a}>
                        Home
                    </Link>
                    <Link href="/produtos" className={styles.a}>
                        Produtos
                    </Link>
                    <Link href="/contato" className={styles.a}>
                        Contato
                    </Link>
                </nav>
            </aside>
            <h1 style={{
                fontSize:tamanho
            }}>{props.title}</h1>
        </header>
    )
}
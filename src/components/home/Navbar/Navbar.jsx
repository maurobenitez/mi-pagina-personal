import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div classname={styles.logo}>Mauro Benitez</div>
            <div>
                <Link to={"/"}>
                    <button className={styles.button}>ir a landing page</button>
                </Link>
                <Link className={styles.link} to={"/"}>
                    <button className={styles.button}>ver curriculum</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
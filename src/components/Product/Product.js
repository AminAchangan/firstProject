import styles from './product.module.css';
// import { BiTrash } from "react-icons/bi";

const Product = (props) => {
    console.log(props);
    return (
        <div className={styles.product} onClick={props.click}>
            <p>product name : {props.product.title}</p>
            <p>product price : {props.product.price}</p>
            <input type='text' className={styles.input} onChange={props.onChange} value={props.product.title} />
            <button className={styles.button} onClick={props.onDecrement}>
                {/* {props.product.quantity > 1 ? "-" : <BiTrash /> } */}
            </button>
            <span className={styles.value}>{props.product.quantity}</span>
            <button className={`${styles.button} ${styles.inc}`} onClick={props.onIncrement} >+</button>
            <button className={styles.button} onClick={props.onDelete}>delete</button>
        </div>
    );
}

export default Product;
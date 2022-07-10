import styles from './input.module.scss';
export function InputIcon(props){
    const newProps = [props].filter(props => delete props.Icon);
    console.log(newProps);
    const { Icon } = props;
    // console.log([props]);
    <div className={styles.wrapperInput}>
        <input />
        <Icon />
    </div>
}
export default function Input(props){
    const { Icon } = props;
    return(
        <div className={styles.wrapperInput}>
            <input />
            <Icon />
        </div>
    )
}
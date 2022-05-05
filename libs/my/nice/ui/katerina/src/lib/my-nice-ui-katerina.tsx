import styles from './my-nice-ui-katerina.module.scss';

/* eslint-disable-next-line */
export interface MyNiceUiKaterinaProps {}

export function MyNiceUiKaterina(props: MyNiceUiKaterinaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyNiceUiKaterina!</h1>
    </div>
  );
}

export default MyNiceUiKaterina;

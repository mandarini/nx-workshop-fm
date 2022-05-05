import styles from './ui-test.module.scss';

/* eslint-disable-next-line */
export interface UiTestProps {
  title: string;
}

export function UiTest(props: UiTestProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {props.title}!</h1>
    </div>
  );
}

export default UiTest;

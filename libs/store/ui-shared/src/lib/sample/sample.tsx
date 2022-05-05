import styles from './sample.module.scss';

/* eslint-disable-next-line */
export interface SampleProps {
  name: string;
  age: number;
  something: boolean;
}

export function Sample(props: SampleProps) {
  return (
    <div>
      <p>Hello, {props.name}!</p>
      <p>Age: {props.age}</p>
      <p>Something is {props.something ? 'true' : 'false'}</p>
    </div>
  );
}

export default Sample;

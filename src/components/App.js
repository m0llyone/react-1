import './App.module.css';
import '../assets/Fonts/Fonts.css';
import styles from './App.module.css';
import { Title } from './Title/Title';
import { Description } from './description/Description';
import { Offers } from './Offers/Offers';

export const App = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Description />
      <Offers />
    </div>
  );
};

export default App;

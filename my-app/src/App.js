import Routes from './routes';
import { HeaderComponent } from './shared';
import { FooterComponent } from './shared';

function App(){
  return (
    <>
      <HeaderComponent/>
      <Routes/>
      <FooterComponent/>
    </>
  );
}
export default App;
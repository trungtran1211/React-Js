import { Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import Header from './Components/Header';
import { useSnackbar } from 'notistack';
import ProductFeature from './features/Product';

function App() {
    const { enqueueSnackbar } = useSnackbar();

    const showNoti = () => {
        enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
    }
    return (

        <div className = "App" >
        <Header/> {
            /* <Button onClick={showNoti}>Show</Button>
                      <h1>Danh sách TodoList</h1> */
        } 
        <Switch >
            <Route path = "/todos" component = { TodoFeature }/> 
            <Route path = "/album"component = { AlbumFeature }/>
            <Route path = "/products"component = { ProductFeature }/>
        </Switch> 
        </div>
    );
}

export default App;
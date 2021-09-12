import {useState, useContext, useEffect} from 'react';
import { StateContext, DispatchContext} from './../store';
import AuthLayout from './AuthLayout';
import { SET_ITEMS } from '../store/action-types';
import ItemList from '../components/ItemList';
import ItemFilters from '../components/ItemFilters';
import Pagination from '../components/Pagination';
import {index as getItems} from './../adapters/items';

function Home() {
    const { items } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [params, setParams] = useState({sortPrice: 'any', keyword: ''})

    useEffect(() => {
        getItems({ ...params, page: currentPage })
            .then(response => {
                console.log(response)
                dispatch({
                    type: SET_ITEMS,
                    payload: response
                });
            })
            .catch(error => {
                console.log(error);
            })
    }, [params, currentPage, dispatch])

    return (
        <AuthLayout className="pt-3">
            <ItemFilters
                setParams={setParams}
            />

            <ItemList
                items={items.all}
            />

            <Pagination
                pageDetails={items.pageDetails}
                setCurrentPage={setCurrentPage}
            />
        </AuthLayout>
    )
}

export default Home;

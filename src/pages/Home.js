import AuthLayout from './AuthLayout';
import ItemList from '../components/ItemList';

function Home() {
    const items = [1,2,3,4,5,6,7,8,9];
    return (
        <AuthLayout className="pt-5">
            <ItemList items={items} />
        </AuthLayout>
    )
}

export default Home;

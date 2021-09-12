import Header from '../components/layouts/Header';
import BoxedContent from '../components/layouts/BoxedContent';

function AuthLayout({children}) {
    return (
        <>
           <Header />

           <div className="content-wrapper">
                <BoxedContent>
                    {children}
                </BoxedContent>
           </div>
        </>
    )
}

export default AuthLayout
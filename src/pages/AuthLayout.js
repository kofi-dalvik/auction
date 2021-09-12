import Header from '../components/layouts/Header';
import BoxedContent from '../components/layouts/BoxedContent';

function AuthLayout({children, className}) {
    return (
        <>
           <Header />

            <div className={`content-wrapper ${className}`}>
                <BoxedContent>
                    {children}
                </BoxedContent>
           </div>
        </>
    )
}

export default AuthLayout
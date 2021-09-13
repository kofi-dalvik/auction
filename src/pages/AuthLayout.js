import { Header, BoxedContent} from '../components';

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
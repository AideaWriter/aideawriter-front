import SignUpForm from '@/app/components/auth/signUpForm';
import RootLayout from '@/app/layout';


const SugIn = () => {
    return<RootLayout>
        <section className="section-signeIn">
            <div className="container">
                <div className="block-sign">
                    <SignUpForm/>
                    {/*<ImageSign*/}
                    {/*    className={"image-signup"}*/}
                    {/*    width={432}*/}
                    {/*    height={870}*/}
                    {/*/>*/}
                </div>
            </div>
        </section>
    </RootLayout>
}

export default SugIn

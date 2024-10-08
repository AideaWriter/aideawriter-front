import SignInForm from '@/app/components/auth/signInForm';
import RootLayout from '@/app/layout';
import ImageSign from '@/app/components/auth/ImageSign';
import {Metadata} from 'next';


export const metadata: Metadata = {
    title: 'Log In',
    description: 'Generated by create next app',
}

const SugIn = () => {


    return<RootLayout>
        <section className="section-signeIn">
            <div className="container">
                <div className="block-sign">
                    <SignInForm/>
                    <ImageSign
                        className={"image-signin"}
                        width={612}
                        height={870}
                    />
                </div>
            </div>
        </section>
    </RootLayout>
}

export default SugIn

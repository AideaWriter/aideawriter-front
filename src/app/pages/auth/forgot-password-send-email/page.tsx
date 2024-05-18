import RootLayout from '@/app/layout';
import ImageSign from '@/app/components/auth/ImageSign';
import ForgotPasswordFormSendEmail from '@/app/components/forgot-password/ForgotPasswordForm';


const ForgotPassword = () => {


    return<RootLayout>
        <section className="section-signeIn">
            <div className="container">
                <div className="block-sign">
                    <ForgotPasswordFormSendEmail/>
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

export default ForgotPassword

import Image from 'next/image';
import Loading from '../../images/Eclipse@1x-1.0s-200px-200px.svg';

const PopUpLoadingGenerateArticle = () => {
    return <div className={'popup-generate-animation'}>
            <div className={'block-image-generate'}>
                <Image src={Loading} alt={'loading'} />
                <p>The article is being generated, please wait...</p>
            </div>
    </div>
}

export default PopUpLoadingGenerateArticle

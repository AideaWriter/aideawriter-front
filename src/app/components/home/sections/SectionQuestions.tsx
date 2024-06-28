'use client';

import {Accordion, AccordionItem} from '@nextui-org/accordion';

const SectionQuestions = () => {
    const questionFirst =
        "Yes, you can generate content for free. Upon registration, you are given 5 Article Points that you can use. One Article Point is spent per generation.";
    const questionSecond =
        "AIdeaWriter currently supports 6 languages such as English, Spanish, French, Portuguese, Russian, German.";
    const questionThird =
        "You enter the topic of the text, headings and keywords, also indicate how creative the text should be, then click on the Generate button and wait for the text to be generated";

    const questionFourth =
        "We are working on this. Integration with WordPress is planned soon, as well as some functions for exporting text in various formats";

    return <section className={'site-section-question'}>
        <div className={'site-container'}>
            <h2 className={`site-section-description-title`}>Questions & Answers</h2>
            <p className={`site-section-description-paragraph`}>This is a straightforward and commonly used header that lets customers know they are looking at different pricing options.</p>
            <div className={'site-section-question-accordion'}>
                <Accordion >
                    <AccordionItem key="1" aria-label="Accordion 1" title="Is AIdeaWriter Content Generator free to use?">
                        {questionFirst}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="What languages does AIdeaWriter support?">
                        {questionSecond}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="How does AIdeaWriter work?">
                        {questionThird}
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Accordion 4" title="Do you have wordpress plugin?">
                        {questionFourth}
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
}

export default SectionQuestions

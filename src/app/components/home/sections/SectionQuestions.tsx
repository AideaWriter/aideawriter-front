'use client';

import {Accordion, AccordionItem} from '@nextui-org/accordion';

const SectionQuestions = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return <section className={'site-section-question'}>
        <div className={'site-container'}>
            <h2 className={`site-section-description-title`}>Questions & Answers</h2>
            <p className={`site-section-description-paragraph`}>This is a straightforward and commonly used header that lets customers know they are looking at different pricing options.</p>
            <div className={'site-section-question-accordion'}>
                <Accordion >
                    <AccordionItem key="1" aria-label="Accordion 1" title="What is a copy?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Does CopyGen to write long articles?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Is the generated content original?">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Accordion 4" title="Do you have wordpress plugin?">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
}

export default SectionQuestions

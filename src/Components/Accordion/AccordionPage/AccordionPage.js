import AccordionGroup from '..';
import AccordionItem from '../AccordionItem';
import AccordionItemHeading from '../AccordionItemHeading';
import AccordionItemPanel from '../AccordionItemPanel';
import styles from './accordion-page.module.css';

function AccordionPage() {
    return (
        <div className={styles.container}>
            <p>Accordion Page</p>

            <h2>Behaviour 1</h2>

            <AccordionGroup>
                <AccordionItem id={1} >
                    <AccordionItemHeading>
                        <span>A heading</span>
                        <span></span>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Some content</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem id={2}>
                    <AccordionItemHeading>
                        <span>A heading</span>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>Some content</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </AccordionGroup>


            <h2>Behaviour 2</h2>

            <AccordionItem id={3}>
                <AccordionItemHeading>
                    <span>A heading</span>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Some content</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem id={3}>
                <AccordionItemHeading>
                    <span>A heading</span>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>Some content</p>
                </AccordionItemPanel>
            </AccordionItem>
        </div >
    );
}

export default AccordionPage;

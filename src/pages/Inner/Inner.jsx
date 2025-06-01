import styles from "./Inner.module.css"
import Panel from "../../components/Panel/Panel";
import Box from "../../components/Box/Box"
import Expertise from "../../components/Expertise/Expertise";
import Portfolio from "../../components/Portfolio/Portfolio";
import Address from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";
import Timeline from "../../components/Timeline/Timeline";

export default function Inner() {
    return (
        <div className={styles.wrapper}>
            <Panel />
            <main>
                <Box 
                    title="About me"
                    content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque"
                />
                <Timeline data={[
                        { "date": 2001, "title": "Title 0", "text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n" },
                        { "date": 2000, "title": "Title 1", "text": "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n" },
                        { "date": 2012, "title": "Title 2", "text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n" },
                        { "date": 2015, "title": "Title 3", "text": "Cupidatat excepteur enim reprehenderit fugiat. Magna deserunt enim deserunt excepteur. Magna excepteur fugiat enim enim nisi. Laborum voluptate deserunt enim excepteur enim." },
                        { "date": 2017, "title": "Title 4", "text": "Sint amet excepteur deserunt enim. Excepteur enim fugiat magna deserunt. Excepteur enim nisi magna deserunt fugiat enim." },
                        { "date": 2019, "title": "Title 5", "text": "Deserunt enim magna excepteur fugiat enim nisi. Excepteur enim magna deserunt fugiat enim nisi. Magna deserunt enim excepteur enim fugiat nisi." },
                        { "date": 2021, "title": "Title 6", "text": "Enim excepteur magna deserunt fugiat enim nisi. Magna deserunt enim excepteur enim fugiat nisi. Excepteur enim magna deserunt fugiat enim nisi." },
                        { "date": 2023, "title": "Title 7", "text": "Fugiat enim nisi magna deserunt excepteur enim. Magna deserunt enim excepteur enim fugiat nisi. Excepteur enim magna deserunt fugiat enim nisi." }
]} />
                <Expertise data={[ { date: '2013-2014', info: { company: 'Google', job: 'Front-end developer / php programmer', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' } }, { date: '2012', info: { company: 'Twitter', job: 'Web developer', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' } } ]} />
                <Portfolio/>
                <Address/>
                <Feedback data={[ {feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor', reporter: { photoUrl: './user.png', name: 'John Doe', citeUrl: 'https://www.citeexample.com' } }, {feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor', reporter: { photoUrl: './user.jpg', name: 'John Doe', citeUrl: 'https://www.citeexample.com' } } ]} />
                
            </main>
        </div>
    );
}
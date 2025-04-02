import List1 from './list1'
import Table1 from './list1'
import Form1 from './form1'
import runningImage from './peoplerunning.jpg';

const Hobby1 = () => {
    return (
        <>
            <img src={runningImage} alt="People running"/>
            <p>Running is a versatile and accessible form of exercise that offers numerous physical and mental health benefits. Beyond simply improving cardiovascular fitness, regular running can strengthen muscles, enhance bone density, and help maintain a healthy weight. Many runners experience improved mood and reduced stress levels thanks to the release of endorphins—often referred to as the "runner's high." As a hobby, running requires minimal equipment, can be done almost anywhere, and allows for personal goal-setting at any fitness level. Whether you're sprinting around a track, jogging through neighborhood streets, or exploring scenic trails, running provides an opportunity to disconnect from daily pressures while connecting with your body and the environment around you. For many enthusiasts, running evolves from a simple exercise routine into a lifelong passion that builds discipline, resilience, and a supportive community of like-minded individuals.</p>
            <List1 />
            <Table1 />
            <Form1 />
        </>
    );
};

export default Hobby1;
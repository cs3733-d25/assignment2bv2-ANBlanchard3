import List2 from './list2';
import Table2 from './table2';
import Form2 from './form2';
import xboxImage from './xboximage.jpeg';

const Hobby2 = () => {
    return (
        <>
            <img src={xboxImage} alt="Xbox games"/>
            <p>Video games is a great way to spend time with friends and relieve stress. I usually play multiplayer
                games that I can play with friends from my hometown that I don't see often. I also have a lot of fun
                playing single player games that have a fun engaging story! </p>
            <List2/>
            <Table2/>
            <Form2/>
        </>
    );
};

export default Hobby2;
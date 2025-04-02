interface introProps {
    name1: string;
    name2: string;
}

const intro = ({ name1, name2 }: introProps) => {
    return (
        <p>Hello reader, I am {name1}, a senior robotics engineering student at WPI. I ran competitively from elementary school through high school and still regularly run distance as a break from my studies.</p>
    );
};
export default intro;
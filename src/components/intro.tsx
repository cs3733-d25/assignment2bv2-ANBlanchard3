interface introProps {
    name1: string;
    name2: string;
}

const intro = ({ name1, name2 }: introProps) => {
    return (
        <p>Hello reader, I am {name1}, a senior robotics engineering student at WPI. I ran competitively from elementary school through high school and still regularly run distance as a break from my studies.
            <br />
            Hello reader! My name is {name2} and I am sophomore robotics engineering student at WPI. I have been playing video games since I was 5 years old, starting on a DS with single player games and then got an xbox later. I started playing multiplayer games in middle school. I now mostly play multiplayer games to connect with friends.</p>

    );
};
export default intro;
interface titleProps {
    _class: string;
    teamNumber: number;
    hobby1: string;
    hobby2: string;

}

const title = ({ _class, teamNumber, hobby1, hobby2 }: titleProps) => {
    return (
        <h1>{_class} Team {teamNumber}: {hobby1} and {hobby2}</h1>
    );
};
export default title;
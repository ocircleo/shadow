
import Instractors from "./homeCompo/Instractors";
import Title from "./homeCompo/Title";
import CoursesHome from "./homeCompo/courses/CoursesHome";



const Home = () => {
    return (
        <div>
            <Title></Title>
            <CoursesHome></CoursesHome>
            <Instractors></Instractors>
        </div>
    );
};

export default Home;
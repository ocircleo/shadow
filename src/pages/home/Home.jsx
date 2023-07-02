
import Instractors from "./homeCompo/Instractors";
import Slider from "./homeCompo/Slider";
import Title from "./homeCompo/Title";
import CoursesHome from "./homeCompo/courses/CoursesHome";



const Home = () => {
    return (
        <div>
            <Title></Title>
            <Slider></Slider>
            <CoursesHome></CoursesHome>
            <Instractors></Instractors>
        </div>
    );
};

export default Home;
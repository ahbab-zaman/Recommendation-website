import Slide from "../../Components/Slide";
import bannerImg from "../../assets/banner.jpg"
const MyQueries = () => {
    return (
        <div className="space-y-2">
            <div>
            <Slide image={bannerImg} text={"Submit Your Query and let the community Recommend!"} button={"Add Queries"}></Slide>
            </div>

            <div className="w-3/5 text-center mx-auto py-6">
                <h2 className="text-4xl font-semibold">Explore All My Queries</h2>
                <p>Don’t hesitate to ask anything! Add your query here and explore a world of insights, ideas, and personalized recommendations from experts and peers alike."</p>
            </div>
            
            <div>
                
            </div>
        </div>
    );
};

export default MyQueries;
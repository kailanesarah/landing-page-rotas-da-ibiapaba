import bannerHero from "../assets/img/tablet.png";
const Banner = () => {
    return ( 
        <div className=" hidden w-full md:flex items-center justify-center mb-60 p-20">
        <img
          src={bannerHero}
          alt="Banner Hero"
          className="h-1/2 w-full rounded-2xl  z-10"
          style={{ margin: '-700px' }}
        />
      </div>
     );
}
 
export default Banner;
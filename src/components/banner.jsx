import bannerHero from "../assets/img/tablet.png";
const Banner = () => {
  
    return ( 
        <div className=" w-full mb-0 flex items-center justify-center md:mb-5 p-20
        transition-transform duration-300 hover:-rotate-2 hover:rotate-2">
        <img
          src={bannerHero}
          alt="Banner Hero"
          className="h-1/2 w-full rounded-2xl z-10 mt-[-200px] md:mt-[-300px]"
       
        />
      </div>
     );
}
 
export default Banner;
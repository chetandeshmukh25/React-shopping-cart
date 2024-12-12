import { useContext } from 'react';
import Banner from '../component/Banner';
import { shoppingCartContext } from '../context/index';

const Home = () => {
    const{name} = useContext(shoppingCartContext);
    return(
        <>
        {/* <h1 className="text-center">Home page</h1> */}
        <Banner Heading={`Hello `+name} Description='loremAll of the components in Tailwind UI are provided in three formats: React, Vue, and vanilla HTML.' />
        </>
    )
}
export default Home;
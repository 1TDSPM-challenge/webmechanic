import styled from "styled-components";
import ImgBanner from '../assets/banner.jpg'

const Banner = styled.img`
    width: 100%;
    height: auto;
`

const Home = () => {
    return (
        <>
            <Banner src={ImgBanner} alt="Banner" />

        </>
    );
}

export default Home;
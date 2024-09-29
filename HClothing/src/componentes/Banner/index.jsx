import styled from "styled-components";

const BannerPic = styled.img`
    max-width: 100%;
`

const Banner = () => {
    return (
        <BannerPic src="assets/banner.png" alt="" />
    )
}

export default Banner;
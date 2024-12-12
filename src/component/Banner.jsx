
const heading = "Tailwind CSS ";
const description = "This class accepts more than one value in tailwind CSS and all the properties are covered as in class form.";
const banner_img = 'https://t3.ftcdn.net/jpg/04/67/96/14/360_F_467961418_UnS1ZAwAqbvVVMKExxqUNi0MUFTEJI83.jpg';
const Banner = ({Image=banner_img, Heading=heading, Description=description}) => {
    return(
        <div className="banner_wrapper" style={{"backgroundImage":`url(${Image})`}}>
            <div className="banner_content">
                <h1>{Heading}</h1>
                <div className="banner_desc">
                    {Description}
                </div>
            </div>
        </div>
    )
}
export default Banner;
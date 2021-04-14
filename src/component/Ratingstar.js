import stars from '../images/icon-star.svg';
function Rating({ name, rate,id}) {
    var star = [];
    for (let i = 0; i < rate; i++) {
        star.push(<img className="mx-1" key={i} src={stars} alt="star" />);
    }
    return (
        <div className={` jumbotron py-1 col-lg-11 py-lg-3 rate-${id}`}>
                <div className="mx-auto col-7 col-lg-4 mb-1 d-lg-inline-block mb-lg-0">
                    {star}
                </div>
                <p className="text-center magenta font-weight-bold col-lg-8 d-lg-inline " >Rated {rate} Stars in {name}</p>
            </div>
        
        );
}
export default Rating;

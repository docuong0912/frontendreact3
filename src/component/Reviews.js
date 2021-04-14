
function Reviews({name,src,type,comment,id}) {
    return (
        <div className={`review p-4  rounded review-${id} col-lg-4 `}>
            <div className="container-fluid d-flex flex-row mt-2">
                <img className="rounded-circle avatar" src={src} alt="avatar" />
                <div className='col-6 small mt-2'>
                    <b>{name}</b>
                    <p className="soft-pink">{type}</p>
                </div>
                
            </div>
            <p className="light-magenta small line-height mt-3">{comment}</p>
        </div>
        );
}
export default Reviews;

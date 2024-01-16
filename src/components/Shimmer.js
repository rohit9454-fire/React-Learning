
const Shimmer = (() => {


    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

    const ShimmerCard = () => {
        return (
            <div className='shimmer-card'>
                <div className='shimmer-img'></div>
                <h1 className="simmer-heading"></h1>
                <h5 className="simmer-heading"></h5>
                <h5 className="simmer-heading"></h5>
            </div>
        )
    }

    return (
        <div className='shimmer-container'>
            {list.map((res) => <ShimmerCard key={res} />)}
        </div>
    )
})

export default Shimmer;
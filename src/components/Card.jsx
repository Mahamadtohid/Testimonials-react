import {FaQuoteLeft , FaQuoteRight }from 'react-icons/fa';
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi';

function Card(props){

    let review = props.review;

    return (
        <div className="md:relative flex flex-col">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"src={review.image}></img>

                <div className="w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] z-[-10] left-[10px]"></div>

            </div>
            
            <div>
                <p className='text-center top-[7] text-2xl font-bold capitalize tracking-wider'>{review.name}</p>
                <p className="capitalize text-violet-400 uppercase text-sm">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>
            <p className="text-center mt-4 text-slate-500">{review.text}</p>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
            


        </div>
    )


}

export default Card;
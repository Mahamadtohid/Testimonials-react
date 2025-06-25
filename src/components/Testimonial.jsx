import Card from './Card';
import { FiChevronLeft , FiChevronRight } from 'react-icons/fi';

import {useState} from 'react';

function Testimonial(props){

    const [index , setIndex] = useState(0);

    let reviews = props.reviews;


    function leftClickHandler(){

        if(index -1 < 0){
            setIndex(reviews.length - 1);
        }else{
            setIndex(index - 1);
        }

    }

    function rightClickHandler(){


        if(index +1 >= reviews.length){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }

    }


    function surpriceMeHandler(){

        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);

    }

    return (
        <div className="mt-10 w-[40vw] md:w-[700] bg-white flex flex-col justify-center align-center 
        mt-19 p-10 transition-all duration-200 hover:shadow-xl rounded-md">

                <Card review = {reviews[index]}></Card>



            <div className="flex text-3xl mt-10  gap-3 text-violet-400 font-bold text-center mx-auto">

                    <button onClick={leftClickHandler} className="cursor-pointer hover:text-violet-500">
                        <FiChevronLeft/>
                    </button>

                    <button onClick={rightClickHandler} className="cursor-pointer hover:text-violet-500">
                        <FiChevronRight/>
                    </button>
            </div>
            
            <div className="mt-6">
            <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 
            
                        rounded-md font-bold text-white text-lg" onClick={surpriceMeHandler}>
                Surprise Me
            </button>
            </div>


        </div>
    )


}

export default Testimonial;
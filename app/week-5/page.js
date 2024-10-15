"use client";
import NewItem from './new-item'; //this should hold all functions ill need. only call <NewItem/>

// trying to update page to not need so many import statemnets
//comapred to my week-4.

const Page = () => {
    
    return (
        <div className="text-center p-5 font-sans">
            <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
            <NewItem />
        </div>   
    );
};

export default Page;    //I dont know why this is needed for the page to function.



import { useState } from "react";
import Swal from "sweetalert2";


const Newsletter = () => {
 const [newsletterClose, setNewsLetter] = useState(true)
    const  handleNewsletter = e =>{

        e.preventDefault()

        const form = e.target;
        
        Swal.fire({
            title: "Success",
            text: "Thank you for subscribing to our          newsletter",
            icon: "success",
            confirmButtonText: "ok",
          });
          setNewsLetter(false)
          
        

         form.reset();
    }
    const closeBanner = () => {
        setNewsLetter(false);
      };
    //   if (!newsletterClose) {
    //     return null;
    //   }

    return (
       

<div id="newsletter-banner" tabIndex="-1" className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
    <div className="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto">
        <form 
            onSubmit={handleNewsletter}
        action="#" className="flex flex-col items-center w-full md:flex-row">
            <label htmlFor="email" className="flex-shrink-0 mb-2 mr-auto text-sm font-medium text-gray-500 md:mb-0 md:mr-4 dark:text-gray-400 md:m-0"> Subscribe up for our newsletter</label>
            <input type="email" id="email" placeholder="Enter your email" className="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:mr-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" required>Subscribe</button>
        </form>
    </div>
    <div className="flex items-center absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto">
        <button 
        onClick={closeBanner}
        data-dismiss-target="#newsletter-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg  className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close banner</span>
            
        </button>
    </div>
</div>


    );
};

export default Newsletter;

// const { BannerCollapseButton } = require('flowbite-react');
// import { Banner ,BannerCollapseButton , Button, Label, TextInput } from 'flowbite-react';


// import { HiX } from 'flowbite-react';



// function Component() {
//   return (
//     <Banner>
//       <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
//         <div className="mx-auto flex w-full flex-shrink-0 items-center sm:w-auto">
//           <form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
//             <Label
//               htmlFor="email"
//               className="mb-2 mr-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
//             >
//               Sign up for our newsletter
//             </Label>
//             <TextInput id="email" placeholder="Enter your email" required type="email" />
//             <Button type="submit">Subscribe</Button>
//           </form>
//         </div>
//         <BannerCollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
//           <HiX className="h-4 w-4" />
//         </BannerCollapseButton>
//       </div>
//     </Banner>
//   );
// }

// export default Component;

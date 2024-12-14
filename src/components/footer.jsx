export const Footer = () => {
    return (
        <div className="bg-lightBlue p-10 grid grid-cols-2">
            
            <p className="font-poppins text-sm md:ml-24 ml-0">© 2024 Keshani Perera. All rights reserved.</p>
            <div className="flex justify-center gap-10 justify-self-end md:mr-24 mr-0 ">
            <a href="https://www.linkedin.com/in/keshani-perera-a0b088208/" >
            < img src = "linkedin.png"
            alt = "LinkedIn"
            className = "w-5" >
            </img>
            </a>
            <a href="https://github.com/KeshaniPerera" >
            < img src = "github.png"
            alt = "LinkedIn"
            className = "w-5" >
            </img>
            </a>
            </div>
        </div>
    );
}
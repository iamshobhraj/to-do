import { AiFillGithub } from "react-icons/ai"

type NavBarProps = {
    setShowPopup: (value: boolean) => void;
    showPopup: boolean;
  };

export default function NavBar({ setShowPopup, showPopup }:NavBarProps)  {
    return (
        <div className="flex flex-col justify-between p-6">
            <div className="flex flex-col gap-6">
                <h3>docket</h3>

                <button onClick={() => setShowPopup(!showPopup)} className="rounded-full bg-black p-6">
                    new
                </button>


            </div>

            <a href="https://github.com/iamshobhraj" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="github-icon"/>
            </a>

        </div>
    )
}

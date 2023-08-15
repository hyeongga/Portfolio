import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="w-full  bg-yellow-100 bg-gradient-to-r via-yellow-200 h-60"></div>
      <div className="bg-red-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
        <div className="w-2/3 p-4">
          <div className="w-2/3 p-4">
            <div className="font-bold">CONTACT</div>
            <div className="my-2">
              If you have any queries about the work on this site or would like
              to enquire about a commission, please fill in the form or email me
              at g9h2232 @ gmail.com. Emma Louise Wilson Studio 4/10 Deemouth
              Artist Studios Deemouth Business Centre South Esplanade East
              Aberdeen AB11 9PB
            </div>
            <div className="flex my-4 ">
              <Link to="https://github.com/hyeongga">
                <AiFillGithub size={24} className="" />
              </Link>
              <Link to="">
                <AiOutlineMail size={24} className="ml-2" />
              </Link>
              <Link to="">
                <AiFillLinkedin size={24} className="ml-2" />
              </Link>
              <Link to="https://velog.io/@hyeonga">
                <SiVelog size={24} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="m-2">
            <div>YOUR NAME</div>
            <input className="w-10/12" type="text" />
          </div>
          <div className="m-2">
            <div>YOUR EMAIL</div>
            <input type="text" />
          </div>
          <div className="m-2">
            <div>YOUR MESSAGE</div>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

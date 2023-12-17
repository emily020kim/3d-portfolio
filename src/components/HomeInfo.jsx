import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi I'm
        <span className='font-semibold mx-2 text-white'>Emily</span>
        👋
        <br />
        Full Stack Developer from California
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with a variety of organizations <br /> and picked up a lot of skills 👩‍💻
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn More
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Always working on another cool project <br /> Come check them out! 🔍
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          My Projects
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Looking to add someone to your team? <br/> Feel free to reach out! 📞
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's Talk
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
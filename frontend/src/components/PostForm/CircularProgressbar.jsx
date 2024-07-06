
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ value, text }) => {
  return (
    <div className="w-16 h-16 relative">
      <CircularProgressbar
        value={value}
        text={text}
        styles={buildStyles({
          pathColor: '#000',
          textColor: '#000',
          trailColor: '#d6d6d6',
          textSize: '26px',
        })}
      />
    </div>
  );
};

CircularProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default CircularProgressBar;


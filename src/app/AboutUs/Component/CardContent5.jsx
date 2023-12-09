import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardContent5({ title, content, left, right, color }) {
  return (
    <div className="mt-6">
      {right && (
        <div className="flex flex-row-reverse lg:flex-row">
          <div className="lg:text-right">
            <h3 className="font-[600] text-[20px] leading-[30px]">{title}</h3>
            <p className="font-[400] text-[16px] leading-[30px]">{content}</p>
          </div>
          <FontAwesomeIcon
            icon={faCircle}
            className={`translate-y-[50%] lg:ml-3 mr-3 w-3`}
            style={{ color: `${color}` }}
          />
        </div>
      )}
      {left && (
        <div className="flex ">
          <FontAwesomeIcon
            icon={faCircle}
            className={`translate-y-[50%] mr-3 w-3`}
            style={{ color: `${color}` }}
          />
          <div className="text-left">
            <h3 className="font-[600] text-[20px] leading-[30px]">{title}</h3>
            <p className="font-[400] text-[16px] leading-[30px]">{content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardContent5;

import { getCurrentDate } from "../utils/currentDate";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const weatherIcon = data.current ? data.current.condition.icon : null;
  const currentDate = getCurrentDate();
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/40 p-6 rounded-xl">
      <div className="flex items-center">
        <div className="">
          <h1 className="text-3xl text-white/100 font-medium ">Hari Ini</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              className="w-[120px] object-cover"
              src={weatherIcon}
              alt="Weather Icon"
            />
          </div>
        )}
      </div>
      <div>
        {data.current ? (
          <p className="text-5xl text-white">
            {data.current.temp_c.toFixed()}
            <span>°</span>
          </p>
        ) : null}
        {data.current ? (
          <span className="text-white/100">{data.current.condition.text}</span>
        ) : null}
      </div>
      <div>
        {data.location ? (
          <div className="flex items-center text-white/100 bg-white/30 px-2 py-2 rounded-xl">
            <LocationOnIcon />
            <span>
              {data.location.name}, {data.location.region}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Current;
